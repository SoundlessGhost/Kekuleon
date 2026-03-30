import "./globals.css";

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Script from "next/script"; // ← ADD THIS
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Google Analytics Measurement ID         // ← ADD THIS
const GA_MEASUREMENT_ID = "G-3G556LZGJB"; // ← ADD THIS

export const metadata: Metadata = {
  title: "Kekuleon Research and Training Center | KRTC",
  description:
    "Bridging the Theory-Practice Gap in Science Education. Integrated research, laboratory training, industry collaboration, and community engagement for the next generation of scientists in Bangladesh.",
  keywords: [
    "KRTC",
    "Kekuleon",
    "Research Center Bangladesh",
    "Science Training",
    "Laboratory Training",
    "Applied Chemistry",
    "Pharmaceutical Sciences",
    "Materials Science",
    "Textile Testing",
    "Nursing Training",
    "PhD Programs Bangladesh",
    "IELTS Preparation",
    "Sirajganj",
  ],
  authors: [{ name: "Md. Zakaria Hossain" }],
  openGraph: {
    title: "Kekuleon Research and Training Center | KRTC",
    description:
      "Bridging the Theory-Practice Gap in Science Education in Bangladesh",
    url: "https://kekuleon.com",
    siteName: "KRTC",
    locale: "en_US",
    type: "website",
  },
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      {/* ↓↓↓ ADD THIS BLOCK ↓↓↓ */}
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      {/* ↑↑↑ ADD THIS BLOCK ↑↑↑ */}
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
