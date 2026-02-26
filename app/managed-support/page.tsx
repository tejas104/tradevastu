import Header from "@/components/layout/Header";
import SupportHero from "@/components/managed-support/SupportHero";
import ServiceInclusions from "@/components/managed-support/ServiceInclusions";
import OperationalModel from "@/components/managed-support/OperationalModel";
import PartnershipValues from "@/components/managed-support/PartnershipValues";
import SupportCTA from "@/components/managed-support/SupportCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Managed Support | TRADEVASTU ENTERPRISES",
    description: "Long-term technology partnership, monitoring, and infrastructure support.",
};

export default function ManagedSupportPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <SupportHero />
            <ServiceInclusions />
            <OperationalModel />
            <PartnershipValues />
            <SupportCTA />
            <Footer />
        </main>
    );
}

