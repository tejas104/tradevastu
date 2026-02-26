import Header from "@/components/layout/Header";
import CRMHero from "@/components/crm-optimization/CRMHero";
import CommonCRMFailures from "@/components/crm-optimization/CommonCRMFailures";
import WhatWeOptimize from "@/components/crm-optimization/WhatWeOptimize";
import LeadingPlatforms from "@/components/crm-optimization/LeadingPlatforms";
import OutcomeMetrics from "@/components/crm-optimization/OutcomeMetrics";
import MaximizeCRM from "@/components/crm-optimization/MaximizeCRM";
import Footer from "@/components/layout/Footer";

export default function CRMOptimization() {
  return (
    <main className="min-h-screen">
      <Header />
      <CRMHero />
      <CommonCRMFailures />
      <WhatWeOptimize />
      <LeadingPlatforms />
      <OutcomeMetrics />
      <MaximizeCRM />
      <Footer />
    </main>
  );
}

