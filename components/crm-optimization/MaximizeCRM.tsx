"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function MaximizeCRM() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[#1E293B] dark:bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center animate-reveal">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-display font-bold text-white mb-6 tracking-tighter-premium">
          Maximize Your CRM Potential With <span className="text-black-gold-gradient">TRADEVASTU ENTERPRISES</span>
        </h2>

        <p className="text-base md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
          Stop letting leads fall through the cracks. Join 500+ Indian enterprises that have optimized a leak-proof sales engine for massive velocity.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 border-2 border-white text-white rounded-md font-bold text-base md:text-lg hover:bg-white/10 active:scale-95 transition-all inline-flex items-center justify-center gap-2 group"
          >
            Request a Free Audit
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-4 border-2 border-white text-white rounded-md font-bold text-base md:text-lg hover:bg-white/10 active:scale-95 transition-all"
          >
            Speak to an Expert
          </button>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="maximize-crm-cta"
        title="Maximize Your CRM"
        subtitle="Request a free audit or speak with our experts to unlock your CRM's potential."
      />
    </section>
  );
}
