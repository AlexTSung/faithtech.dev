import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import { StrategyCallBanner } from "@/components/StrategyCallBanner";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StrategyCallBanner variant="compact" className="container mx-auto px-6 -mt-4 mb-4" />
        <Services />
        <CaseStudies />
        <StrategyCallBanner />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
