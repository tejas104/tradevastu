"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function SalesHero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[#1E293B] dark:bg-slate-950 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFD700_1px,transparent_1px),linear-gradient(to_bottom,#FFD700_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center animate-reveal">
        {/* Pre-headline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 md:w-16 bg-gold-gradient"></div>
          <span className="text-gold-gradient text-[10px] md:text-sm font-semibold uppercase tracking-wider opacity-80">
            INSTITUTIONAL EXCELLENCE
          </span>
          <div className="h-px w-12 md:w-16 bg-gold-gradient"></div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-gold-gradient leading-tight tracking-tighter-premium mb-6 max-w-5xl mx-auto">
          Structured Sales Systems That Drive Predictable Closures
        </h1>

        {/* Sub-headline */}
        <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10 opacity-90">
          Eliminate lead leakage and operational blind spots with institutional-grade CRM architecture designed for high-volume real estate developers.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-gold-gradient text-[#1E293B] px-10 py-4 rounded-md font-bold text-base md:text-lg hover:scale-110 active:scale-95 transition-all hover-glow shadow-2xl shadow-gold-500/20"
        >
          Schedule A Free Audit
        </button>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="sales-infrastructure-hero"
        title="Schedule A Free Audit"
        subtitle="Talk to our experts about building a leak-proof sales engine."
      />
    </section>
  );
}
