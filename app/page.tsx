import Header from "@/components/layout/Header";
import Hero from "@/components/homepage/Hero";
import ClientLogos from "@/components/homepage/ClientLogos";
import LocalizedExpertise from "@/components/homepage/LocalizedExpertise";
import SolvingFriction from "@/components/homepage/SolvingFriction";
import EnterpriseSolutions from "@/components/homepage/EnterpriseSolutions";
import RealEstateComplexity from "@/components/homepage/RealEstateComplexity";
import CallToAction from "@/components/homepage/CallToAction";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <LocalizedExpertise />
      <SolvingFriction />
      <EnterpriseSolutions />
      <RealEstateComplexity />
      <CallToAction />
      <Footer />
    </main>
  );
}


