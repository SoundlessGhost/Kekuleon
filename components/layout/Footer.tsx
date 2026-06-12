import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { siteConfig, navigation } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom pt-16 lg:pt-20 pb-12">
        {/* Top row — brand + contact side by side */}
        <div className="grid lg:grid-cols-2 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="KRTC Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Building scientific capacity through integrated applied training,
              research services, industry collaboration, and community
              engagement.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { href: siteConfig.social.facebook, icon: Facebook },
                { href: siteConfig.social.linkedin, icon: Linkedin },
                { href: siteConfig.social.twitter, icon: Twitter },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <span className="block text-xs text-white/30">Phone</span>
                  {siteConfig.phone}
                </div>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <span className="block text-xs text-white/30">WhatsApp</span>
                  {siteConfig.whatsapp}
                </div>
              </a>
            </div>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <span className="block text-xs text-white/30">Email</span>
                  {siteConfig.email}
                </div>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <span className="block text-xs text-white/30">Address</span>
                  {siteConfig.address.full}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10">
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {navigation.footer.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {navigation.footer.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {navigation.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>
              &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
            </span>
            <span>
              Reg. No: {siteConfig.registration.number} | Est.{" "}
              {siteConfig.registration.date}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
