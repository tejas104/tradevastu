"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function AboutCTA() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E293B] via-slate-900 to-black text-center border-t border-white/10 transition-colors duration-300 overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-[#EAB308]/15 blur-3xl" />

            <div className="max-w-4xl mx-auto animate-reveal relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                    Partner With a Structured Technology Team
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-95">
                    Move beyond vendor-client relationships to a strategic partnership focused on
                    structural engineering for your growth.
                </p>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] px-12 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-110 active:scale-95 hover-glow shadow-2xl shadow-gold-500/20"
                >
                    Initiate Strategic Discussion
                </button>
                <p className="mt-8 text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] font-medium opacity-80">
                    Multi-Phase Capability Review | Confidential Exploration
                </p>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="about-partner-with-us"
                title="Initiate Discussion"
                subtitle="Share your enterprise needs with our leadership team."
            />
        </section>
    );
}
