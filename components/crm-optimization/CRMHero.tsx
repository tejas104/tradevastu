"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function CRMHero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-white dark:bg-slate-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center animate-reveal">
        {/* Pre-heading */}
        <p className="text-gold-gradient text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-6 opacity-80">
          A POWERFUL CRM OPTIMIZATION SOLUTION
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold leading-tight tracking-tighter-premium mb-6 max-w-5xl mx-auto">
          <span className="text-gold-gradient">Optimizing CRM for Performance,</span>{" "}
          <span className="text-gray-900 dark:text-white">Accountability & Automation</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10 opacity-90">
          Refining your existing CRM setup for maximum efficiency, eliminating manual gaps, and driving measurable sales growth for Indian enterprises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-10 py-4 rounded-md font-bold text-base md:text-lg hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none"
          >
            Get Started Today
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 border-2 border-[#1E293B] dark:border-white/20 text-[#1E293B] dark:text-white rounded-md font-bold text-base md:text-lg hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95 transition-all"
          >
            View Case Studies
          </button>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="crm-hero-cta"
        title="Get Started with CRM Optimization"
        subtitle="Share your CRM challenges and we'll help you build a high-performance system."
      />
    </section>
  );
}
