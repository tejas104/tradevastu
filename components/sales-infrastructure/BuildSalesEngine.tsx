"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function BuildSalesEngine() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl dark:shadow-none p-8 md:p-12 text-center hover-lift transition-all lg:animate-slide-up border border-transparent dark:border-white/5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tighter-premium">
            Build Your Sales Engine
          </h2>

          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            Take the first step towards predictable sales operations with a complimentary infrastructure audit.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-10 py-4 rounded-md font-bold text-base md:text-lg hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none mb-6"
          >
            BOOK A DISCOVERY SESSION
          </button>

          <p className="text-[10px] md:text-sm text-gray-400 uppercase tracking-widest font-medium">
            Instant | 30-Min | Expert | Free | No-Obligation
          </p>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="build-sales-engine-cta"
        title="Book A Discovery Session"
        subtitle="Schedule a session to explore how we can help you build a predictable sales engine."
      />
    </section>
  );
}
