"use client";

import { useState } from "react";
import Link from "next/link";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="flex flex-col items-center space-y-8 md:space-y-12 animate-reveal">
          {/* Content */}
          <div className="max-w-5xl space-y-6 md:space-y-8">
            <p className="text-[10px] md:text-sm text-gold-gradient uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold opacity-90 mx-auto">
              Driving institutional-grade sales performance
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-7xl xl:text-8xl font-display font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Modernizing Sales <br />
              <span className="text-black dark:text-white">Systems for </span><br className="hidden md:block" />
              <span className="text-gold-gradient italic pr-4">Real Estate and MSME&apos;s</span>
            </h1>

            <p className="text-sm sm:text-base md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto opacity-90">
              Scalable sales infrastructure tailored for the Indian real estate landscape – making localized lead intelligence and operational workflows seamless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 md:pt-8 justify-center items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto bg-[#1E293B] text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-slate-300 dark:shadow-none"
              >
                Request Expert Audit
              </button>
              <Link
                href="/solutions"
                className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gray-50 dark:hover:bg-white/10 active:scale-95 transition-all text-center shadow-lg dark:shadow-none"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="homepage-hero-audit"
        title="Request Expert Audit"
        subtitle="Let&apos;s analyze your current sales infrastructure and find hidden ROI."
      />
    </section>
  );
}
