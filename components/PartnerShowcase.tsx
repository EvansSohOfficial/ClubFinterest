"use client";

const partners = [
  { name: "Protege Ventures", type: "VC" },
  { name: "Altman Solon", type: "Consulting" },
  { name: "SVCA", type: "Association" },
  { name: "Sequoia Capital", type: "VC" },
  { name: "a]6z", type: "VC" },
  { name: "McKinsey & Co", type: "Consulting" },
  { name: "Goldman Sachs", type: "Finance" },
  { name: "Bain Capital", type: "VC" },
  { name: "Bessemer VP", type: "VC" },
  { name: "BCG", type: "Consulting" },
];

export default function PartnerShowcase() {
  // Double the partners for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-20 lg:py-28 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Partners</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4 text-balance">
            Backed by Industry Leaders
          </h2>
          <p className="text-background/70 text-lg">
            We partner with top firms to bring you exclusive access and opportunities.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div className="flex animate-marquee">
          {doubledPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="bg-background/10 backdrop-blur-sm rounded-xl px-8 py-6 border border-background/10 hover:bg-background/20 transition-colors duration-300 min-w-[200px]">
                <p className="text-background font-bold text-lg">{partner.name}</p>
                <p className="text-background/60 text-sm mt-1">{partner.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Grid for smaller screens / static view */}
      <div className="container mx-auto px-4 lg:px-8 mt-12 hidden lg:block">
        <div className="grid grid-cols-5 gap-4">
          {partners.slice(0, 5).map((partner) => (
            <div
              key={partner.name}
              className="bg-background/5 rounded-xl px-6 py-4 border border-background/10 hover:bg-background/10 transition-colors duration-300 text-center"
            >
              <p className="text-background font-semibold">{partner.name}</p>
              <p className="text-background/50 text-xs mt-1">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
