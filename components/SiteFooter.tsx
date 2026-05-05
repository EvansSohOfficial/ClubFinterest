"use client";

import Link from "next/link";
import { Send, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#pillars" },
  { label: "Story", href: "#timeline" },
  { label: "Partners", href: "#partners" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">CF</span>
              </div>
              <span className="text-xl font-bold">Club Finterest</span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Finance for everyone. Made for students, by students.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-background mb-4">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Bigger icons with handles */}
          <div>
            <h3 className="font-semibold text-background mb-4">Connect</h3>
            <div className="flex flex-col gap-4">
              {/* Telegram */}
              <a
                href="https://t.me/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Send className="w-6 h-6" />
                </div>
                <span className="font-medium">t.me/clubfinterest</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-medium">@clubfinterest</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="font-medium">Club Finterest</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              v0.1 2025 · Club Finterest
            </p>
            <p className="flex items-center gap-1 text-background/50 text-sm">
              Made with <Heart className="w-5 h-5 text-primary fill-primary" /> for students, by students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
