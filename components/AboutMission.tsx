"use client";

import { Target, Heart } from "lucide-react";

const universities = [
  { name: "NUS", abbr: "NUS" },
  { name: "NTU", abbr: "NTU" },
  { name: "SMU", abbr: "SMU" },
  { name: "SUTD", abbr: "SUTD" },
  { name: "SIT", abbr: "SIT" },
  { name: "SUSS", abbr: "SUSS" },
];

export default function AboutMission() {
  return (
    <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Finance for Everyone
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Mission Column */}
          <div className="bg-secondary-foreground/5 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
              To be Singapore&apos;s leading student-led finance community that makes finance accessible, confident, and fun for everyone.
            </p>
          </div>

          {/* Belief Column */}
          <div className="bg-secondary-foreground/5 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Our Belief</h3>
            </div>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
              Finance should be open, practice-first, and people-powered. We remove exclusivity and build confidence through a women-first lens that keeps spaces welcoming while staying open to all.
            </p>
          </div>
        </div>

        {/* University Partners */}
        <div className="text-center">
          <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider mb-6 font-medium">
            Partner Universities
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {universities.map((uni) => (
              <div
                key={uni.abbr}
                className="px-6 py-3 bg-secondary-foreground/10 rounded-lg border border-secondary-foreground/10"
              >
                <span className="font-semibold text-secondary-foreground/90">{uni.abbr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
