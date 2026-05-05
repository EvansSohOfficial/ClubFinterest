import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Club Finterest | Bringing Fun to Finance",
  description: "Stanford's premier women-first community exploring venture capital, consulting, and finance through hands-on experiences, mentorship, and genuine connections.",
  keywords: ["finance", "venture capital", "consulting", "Stanford", "women in finance", "community", "career development"],
  authors: [{ name: "Club Finterest" }],
  openGraph: {
    title: "Club Finterest | Bringing Fun to Finance",
    description: "Stanford's premier women-first community exploring venture capital, consulting, and finance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Club Finterest | Bringing Fun to Finance",
    description: "Stanford's premier women-first community exploring venture capital, consulting, and finance.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B00",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
