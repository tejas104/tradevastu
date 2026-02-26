import Header from "@/components/layout/Header";
import SalesHero from "@/components/sales-infrastructure/SalesHero";
import StructuralInefficiencies from "@/components/sales-infrastructure/StructuralInefficiencies";
import InfrastructureMatrix from "@/components/sales-infrastructure/InfrastructureMatrix";
import HighFidelityArchitecture from "@/components/sales-infrastructure/HighFidelityArchitecture";
import DeploymentTimeline from "@/components/sales-infrastructure/DeploymentTimeline";
import BuildSalesEngine from "@/components/sales-infrastructure/BuildSalesEngine";
import Footer from "@/components/layout/Footer";

export default function SalesInfrastructure() {
  return (
    <main className="min-h-screen">
      <Header />
      <SalesHero />
      <StructuralInefficiencies />
      <InfrastructureMatrix />
      <HighFidelityArchitecture />
      <DeploymentTimeline />
      <BuildSalesEngine />
      <Footer />
    </main>
  );
}







