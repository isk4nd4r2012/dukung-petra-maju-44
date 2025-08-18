import Navigation from "@/components/Navigation";
import PetraHero from "@/components/PetraHero";
import ContributionLevels from "@/components/ContributionLevels";
import SocialImpact from "@/components/SocialImpact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PetraHero />
      <SocialImpact />
      <ContributionLevels />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
