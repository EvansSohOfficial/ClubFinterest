"use client";

import { TrendingUp, Users, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const openRoles = [
  {
    title: "Growth Hacker",
    description: "Drive community growth through creative marketing, social media, and partnership outreach.",
    commitment: "5-8 hrs/week",
    skills: ["Marketing", "Social Media", "Analytics"],
  },
  {
    title: "Events Lead",
    description: "Plan and execute engaging events that bring our community together and create memorable experiences.",
    commitment: "6-10 hrs/week",
    skills: ["Event Planning", "Logistics", "Communication"],
  },
  {
    title: "Content Creator",
    description: "Create compelling content that showcases our community and educates members on finance topics.",
    commitment: "4-6 hrs/week",
    skills: ["Writing", "Design", "Video"],
  },
];

const benefits = [
  "Peer-led recruitment process",
  "Direct mentorship from founders",
  "Build your leadership portfolio",
  "Network with industry professionals",
  "Shape the future of finance education",
];

export default function TeamRecruitment() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Content - 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Join the Team</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Help Us Build Something Special
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We&apos;re looking for passionate individuals who want to shape the future of finance 
              education. No prior experience required - just bring your enthusiasm and willingness to learn.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#apply"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Cards - 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* More Roles Card */}
            <div className="bg-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-semibold mb-1">More roles coming soon</p>
              <p className="text-muted-foreground text-sm">
                Follow us on Instagram to stay updated on new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
