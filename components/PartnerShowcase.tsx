import Image from "next/image";

export default function PartnerShowcase() {
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

      {/* Partners Image */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative w-full max-w-5xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sponsors-Ug8o8IATh9J55NoteRILFUBpN1oYOk.png"
            alt="Our Partners - Protégé Ventures, OpenSpace Capital, Women in VSEA, Sigma Squared, Seedly, CMT Digital, Earlybird, Empower2Free, Atlas Annotate, Paragon Capital Management, The Collective, SVCA, The Generative Beings, iGlobe Partners, Notion, NUS Enterprise, Beyond Earth Ventures"
            width={1568}
            height={856}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
