import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CompanySegments } from "@/components/CompanySegments";
import { Ecosystem } from "@/components/Ecosystem";
import { Team } from "@/components/Team";
import { ImpactStats } from "@/components/ImpactStats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CompanySegments />
      <Ecosystem />
      <Team />
      <ImpactStats />
      <Footer />
    </div>
  );
};

export default Index;
