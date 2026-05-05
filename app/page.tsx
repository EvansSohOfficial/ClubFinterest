import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import AboutMission from "@/components/AboutMission";
import PillarsGrid from "@/components/PillarsGrid";
import RebrandTimeline from "@/components/RebrandTimeline";
import PartnerShowcase from "@/components/PartnerShowcase";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <section id="about">
          <AboutMission />
        </section>
        <section id="pillars">
          <PillarsGrid />
        </section>
        <section id="timeline">
          <RebrandTimeline />
        </section>
        <section id="partners">
          <PartnerShowcase />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
