import Header from "@/components/layout/Header";
import DigitalArchHero from "@/components/digital-architecture/DigitalArchHero";
import CoreInfrastructure from "@/components/digital-architecture/CoreInfrastructure";
import TechnicalStack from "@/components/digital-architecture/TechnicalStack";
import PerformanceStandards from "@/components/digital-architecture/PerformanceStandards";
import ScaleDigitalCTA from "@/components/digital-architecture/ScaleDigitalCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Digital Architecture | TRADEVASTU ENTERPRISES",
    description: "Conversion-Focused Digital Architecture for Indian Real Estate Leaders.",
};

export default function DigitalArchitecturePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <DigitalArchHero />
            <CoreInfrastructure />
            <TechnicalStack />
            <PerformanceStandards />
            <ScaleDigitalCTA />
            <Footer />
        </main>
    );
}

