// =============================================================================
// Rate limiting — Upstash Redis (works on Vercel serverless)
// =============================================================================
// The old file-based approach (.rate-limit.json on disk) was a silent no-op on
// Vercel: the function filesystem is read-only and per-instance, so writes
// threw EROFS and every check passed. This module replaces it with a shared
// Redis store so limits actually hold across all serverless instances.
//
// Graceful degradation: if the Upstash env vars are not set (e.g. local dev,
// or before the database is provisioned), every helper here becomes a no-op
// that ALLOWS the request — the site keeps working, the limit just isn't
// enforced until the env vars exist. A one-time warning is logged so the gap
// is visible. Set both vars in Vercel + .env.local to turn enforcement on:
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    console.warn(
      "[ratelimit] UPSTASH_REDIS_REST_URL/TOKEN not set — rate limiting is DISABLED (requests allowed). Set both to enable.",
    );
    return null;
  }
  try {
    return new Redis({ url, token });
  } catch (err) {
    console.error("[ratelimit] Failed to construct Upstash Redis client:", err);
    return null;
  }
}

const redis = getRedis();

// Per-IP abuse limiter: 3 requests per hour per IP, sliding window. This is
// the main defence against email-bombing / form-spam loops. The window is
// shared by both API routes; the route name is folded into the key so the
// contact and seminar endpoints get independent buckets.
const ipLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      prefix: "krtc/ip",
      analytics: false,
    })
  : null;

// Extract the client IP. On Vercel, x-forwarded-for's first hop is set by the
// platform and is trustworthy; off-Vercel it is spoofable, so this is only
// safe behind Vercel's proxy.
export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

// Returns true if the request is allowed, false if the per-IP limit is hit.
// Fails OPEN (allows) when Redis is unconfigured or errors, so a store outage
// never takes registration/contact down — the failure is logged instead.
export async function checkIpLimit(
  route: string,
  ip: string,
): Promise<boolean> {
  if (!ipLimiter) return true;
  try {
    const { success } = await ipLimiter.limit(`${route}:${ip}`);
    return success;
  } catch (err) {
    console.error("[ratelimit] IP check failed (allowing):", err);
    return true;
  }
}

// Per-key dedup (e.g. `${seminarSlug}:${email}` or a bare email). Unlike the
// IP limiter this is a check-then-mark pair so we only "consume" the key after
// the action actually succeeds — a failed Sheet write or send leaves the user
// free to retry. TTL defaults to 24h.

export async function wasSeen(key: string): Promise<boolean> {
  if (!redis) return false;
  try {
    return (await redis.get(key)) !== null;
  } catch (err) {
    console.error("[ratelimit] wasSeen check failed (treating as unseen):", err);
    return false;
  }
}

export async function markSeen(
  key: string,
  ttlSeconds = 24 * 60 * 60,
): Promise<void> {
  if (!redis) return;
  try {
    await redis.set(key, new Date().toISOString(), { ex: ttlSeconds });
  } catch (err) {
    console.error("[ratelimit] markSeen failed:", err);
  }
}
