"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function ScaleDigitalCTA() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 to-gray-50 dark:from-slate-950 dark:to-black transition-colors duration-300 relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-52 w-52 rounded-full bg-[#EAB308]/15 blur-3xl" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="bg-white/90 dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl p-8 md:p-12 transition-all lg:animate-slide-up">
                    <p className="text-[10px] md:text-xs text-[#EAB308] uppercase tracking-[0.2em] font-bold mb-3">Strategic Next Step</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Scale Your Digital Presence
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                        Future-proof your sales funnel with a high-performance architecture built for growth.
                    </p>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-10 py-4 rounded-md font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-200 dark:shadow-none"
                    >
                        Book Discovery Session
                    </button>
                    <p className="mt-6 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">
                        Talk to a Technical Strategist within 24 Hours
                    </p>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="book-discovery-session"
                title="Book Discovery Session"
                subtitle="Speak with a technical strategist about your digital architecture needs."
            />
        </section>
    );
}
