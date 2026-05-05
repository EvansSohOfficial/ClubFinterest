"use client";

import { Check, Heart, ArrowRight } from "lucide-react";

const timelineEvents = [
  {
    date: "April 2025",
    title: "Girls into VC",
    description: "Founded as a grassroots initiative to help women break into venture capital. Started with 15 founding members.",
    status: "completed",
  },
  {
    date: "June 2025",
    title: "Expanded Programming",
    description: "Launched Foundation Sprints and Career Capital Cafe. Grew to 50+ active members with first industry partnerships.",
    status: "completed",
  },
  {
    date: "August 2025",
    title: "Community Growth",
    description: "Introduced Spark Socials to build deeper connections. Partnered with 10+ VC firms and consulting companies.",
    status: "completed",
  },
  {
    date: "October 2025",
    title: "Club Finterest",
    description: "Rebranded to reflect our broader mission: bringing fun to finance while maintaining our women-first ethos. Expanded to all finance pathways.",
    status: "current",
    highlight: true,
  },
];

export default function RebrandTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              From Grassroots to Movement
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              What started as a small group passionate about venture capital has evolved into 
              a comprehensive community empowering women across all areas of finance.
            </p>
            
            {/* Women-First Ethos Card */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Women-First Ethos</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                While we welcome all who share our values, our mission centers on creating opportunities 
                and pathways for women in finance. We believe diverse perspectives lead to better investment 
                decisions and stronger teams.
              </p>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline Node */}
                  <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2 
                    ${event.status === "current" 
                      ? "bg-primary border-primary" 
                      : event.status === "completed" 
                        ? "bg-card border-primary" 
                        : "bg-card border-border"
                    }`}
                  >
                    {event.status === "completed" ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : event.status === "current" ? (
                      <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                    ) : null}
                  </div>

                  {/* Content Card */}
                  <div className={`bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-lg
                    ${event.highlight 
                      ? "border-primary shadow-lg shadow-primary/10" 
                      : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${event.highlight 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {event.date}
                      </span>
                      {event.highlight && (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    
                    {event.highlight && (
                      <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                        <span>Join us on this journey</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
