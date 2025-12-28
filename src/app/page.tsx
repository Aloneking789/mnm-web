import Header from "@/components/header";
import HeroSection from "@/components/landing/hero-section";
import BentoGridSection from "@/components/landing/bento-grid-section";
import JoinFormSection from "@/components/landing/join-form-section";
import Footer from "@/components/footer";
import FaqSection from "@/components/landing/faq-section";
import EcosystemSection from "@/components/landing/ecosystem-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="bg-background">
          <BentoGridSection />
          <EcosystemSection />
          <FaqSection />
          <JoinFormSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
