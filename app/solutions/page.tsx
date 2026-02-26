import Header from "@/components/layout/Header";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import IndustriesGrid from "@/components/solutions/IndustriesGrid";
import RealEstateSolutions from "@/components/solutions/RealEstateSolutions";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Solutions | TRADEVASTU ENTERPRISES",
    description: "Technology infrastructure for Real Estate Sales Organizations and SMEs.",
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <SolutionsHero />
            <IndustriesGrid />
            <RealEstateSolutions />
            <SolutionsCTA />
            <Footer />
        </main>
    );
}

