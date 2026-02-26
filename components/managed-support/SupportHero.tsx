"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function SupportHero() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="bg-slate-900 dark:bg-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative content-center text-center animate-reveal">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-[#FFD700] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
                    </span>
                    Continuous Infrastructure Integrity
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8">
                    Long-Term Technology <br />
                    <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent italic">
                        Partnership & Monitoring
                    </span>
                </h1>

                <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 opacity-90">
                    Beyond deployment, we provide institutional monitoring and managed support
                    to ensure your digital architecture remains resilient, secure, and performant
                    as your operation scales.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] px-10 py-4 rounded-md font-bold uppercase tracking-wide text-xs md:text-sm hover:scale-110 active:scale-95 transition-all hover-glow shadow-2xl shadow-gold-500/20"
                    >
                        Request Support Proposal
                    </button>
                    <button className="border border-white/20 text-white px-10 py-4 rounded-md font-medium uppercase tracking-wide text-xs md:text-sm hover:bg-white/5 active:scale-95 transition-all">
                        View Service SLA
                    </button>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="request-support-proposal-hero"
                title="Request Support Proposal"
                subtitle="Share your infrastructure requirements and we'll craft a managed support plan."
            />
        </section>
    );
}
