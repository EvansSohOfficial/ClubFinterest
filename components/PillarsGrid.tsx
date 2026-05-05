"use client";

import { useState } from "react";
import { Rocket, Coffee, Sparkles, Users, ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "foundation",
    icon: Rocket,
    title: "Foundation Sprints",
    subtitle: "Learn by Doing",
    description: "Dive into immersive VC simulations and hands-on financial modeling workshops. Build real skills through deal sourcing, due diligence, and investment thesis development.",
    highlights: ["VC Simulation Program", "Financial Modeling", "Investment Thesis", "Due Diligence Training"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "career",
    icon: Coffee,
    title: "Career Capital Cafe",
    subtitle: "Expert-Led Learning",
    description: "Gain insider knowledge through masterclasses led by professionals from top consulting firms and financial institutions. Network with industry leaders.",
    highlights: ["Consulting Masterclasses", "Finance Deep-Dives", "Alumni Panels", "Recruiter Sessions"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "spark",
    icon: Sparkles,
    title: "Spark Socials",
    subtitle: "Build Connections",
    description: "Connect with like-minded peers through curated social experiences. From sunrise hikes to matcha afternoons and vision board sessions.",
    highlights: ["Sunrise Hikes", "Matcha Meetups", "Vision Boards", "Wellness Events"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "board",
    icon: Users,
    title: "Board Hours",
    subtitle: "Access & Opportunity",
    description: "Get exclusive access to recruitment events, info sessions, and one-on-one mentorship with industry professionals and successful alumni.",
    highlights: ["Recruitment Events", "Info Sessions", "1:1 Mentorship", "Alumni Network"],
    color: "from-purple-500 to-pink-500",
  },
];

export default function PillarsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Four Pillars</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A Holistic Approach to Finance Education
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We believe in learning by doing, building genuine connections, and creating pathways to success.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isHovered = hoveredId === pillar.id;
            
            return (
              <div
                key={pillar.id}
                className="group relative bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-primary">{pillar.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pillar.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className={`flex items-center gap-2 text-primary font-medium transition-all duration-300 ${isHovered ? "translate-x-2" : ""}`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
