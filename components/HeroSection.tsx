"use client";

import { Send } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      />
      {/* Tinted overlay */}
      <div className="absolute inset-0 bg-background/85" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Social Links Bar */}
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-6 h-6" />
                <span className="text-sm font-medium">@clubfinterest</span>
              </a>
              <span className="text-border">|</span>
              <a
                href="https://www.instagram.com/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
                <span className="text-sm font-medium">@clubfinterest</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Recruiting Fall 2025</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] text-balance">
              Bringing Fun
              <br />
              <span className="text-primary">to Finance</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed text-pretty">
              Singapore&apos;s student community exploring VC, consulting, and finance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <Send className="w-6 h-6" />
                Join Telegram
              </a>
              <a
                href="https://www.instagram.com/clubfinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-6 h-6" />
                Follow Instagram
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Partners</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">6</p>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-8 rounded-full border-2 border-primary/30" />
              <div className="absolute inset-16 rounded-full border-2 border-primary/40" />
              
              {/* Center content */}
              <div className="absolute inset-24 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/30">
                <div className="text-center text-primary-foreground">
                  <p className="text-5xl font-bold">CF</p>
                  <p className="text-sm font-medium mt-1 opacity-80">Club Finterest</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-8 px-4 py-2 bg-card rounded-lg shadow-lg border border-border">
                <p className="text-sm font-semibold text-foreground">VC Simulation</p>
              </div>
              <div className="absolute bottom-8 left-0 px-4 py-2 bg-card rounded-lg shadow-lg border border-border">
                <p className="text-sm font-semibold text-foreground">Masterclasses</p>
              </div>
              <div className="absolute bottom-24 right-0 px-4 py-2 bg-card rounded-lg shadow-lg border border-border">
                <p className="text-sm font-semibold text-foreground">Spark Socials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
