import Header from "@/components/layout/Header";
import AboutHero from "@/components/about/AboutHero";
import StructurePrecedesScale from "@/components/about/StructurePrecedesScale";
import OperationalStandards from "@/components/about/OperationalStandards";
import LeadershipPositioning from "@/components/about/LeadershipPositioning";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "About | TRADEVASTU ENTERPRISES",
    description: "Learn more about TRADEVASTU ENTERPRISES and our engineering culture.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <AboutHero />
            <StructurePrecedesScale />
            <OperationalStandards />
            <LeadershipPositioning />
            <AboutCTA />
            <Footer />
        </main>
    );
}

