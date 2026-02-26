"use client";

import { Leaf } from "lucide-react";
import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function CallToAction() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-reveal">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center shadow-xl shadow-gold-500/20 animate-float">
            <Leaf className="w-8 h-8 text-[#1E293B]" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-8 tracking-tighter-premium leading-tight">
          Ready to systematize your <br className="hidden md:block" /> institutional growth?
        </h2>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#1E293B] text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#2c3e5a] hover:scale-110 active:scale-95 transition-all shadow-xl shadow-slate-200 hover-glow mb-6"
        >
          BOOK A DISCOVERY SESSION
        </button>

        <p className="text-[10px] md:text-sm text-gray-400 uppercase tracking-widest font-medium">
          It only takes 30 minutes. No commitment, just value.
        </p>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="homepage-bottom-cta"
        title="Discovery Session"
        subtitle="Schedule a 30-minute session to systematize your institutional growth."
      />
    </section>
  );
}
