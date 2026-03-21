# KRTC Website - Next.js 14 + TypeScript

## Kekuleon Research and Training Center

A modern, responsive website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 📘 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for animations
- 📱 **Fully Responsive** design
- 🎯 **SEO Optimized**
- 📝 **Contact Form** ready
- 🌙 **Dark Theme** (Marity-inspired)

## 📁 Project Structure

```
krtc-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── schooling/page.tsx  # KRTC Schooling page
│   ├── phd-programs/page.tsx # PhD Programs page
│   ├── blog/page.tsx       # Blog page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer component
│   └── home/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Services.tsx    # Services grid
│       ├── Stats.tsx       # Statistics
│       └── CTA.tsx         # Call to action
├── lib/
│   ├── data.ts             # All site content/data
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Static images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Installation

1. **Extract the ZIP file**

2. **Install dependencies:**
   ```bash
   cd krtc-website
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Deploy!

Or use Vercel CLI:
```bash
npx vercel
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change brand colors:
```typescript
colors: {
  primary: {
    DEFAULT: '#E31837',  // Change this
    // ...
  }
}
```

### Content
All content is in `lib/data.ts`. Edit:
- Company information
- Navigation links
- Department details
- Team members
- Contact info

### Fonts
Fonts are configured in `app/layout.tsx`:
- Inter (body)
- Playfair Display (headings)

## 📧 Contact Form

The contact form is ready to use. To make it functional:

1. Create `app/api/contact/route.ts`
2. Add your email service (SendGrid, Resend, etc.)

Example:
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  // Send email using your service
  return NextResponse.json({ success: true })
}
```

## 🖼️ Images

Replace placeholder images in `/public/images/`:
- `/images/team/` - Team member photos
- `/images/departments/` - Department images
- `/images/blog/` - Blog post images

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 14.2.0 |
| React | 18.3.0 |
| TypeScript | 5.4.0 |
| Tailwind CSS | 3.4.0 |
| Framer Motion | 11.0.0 |

## 📄 License

© 2025 Kekuleon Research and Training Center Ltd. All Rights Reserved.

---

**Built with ❤️ for KRTC**
