import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import CEOSection from "@/components/CEOSection";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <Services />
      <CEOSection />
      <Products />
      <WhyChooseUs />
      <Coverage />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
