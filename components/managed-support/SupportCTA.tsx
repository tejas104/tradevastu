"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function SupportCTA() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center animate-reveal">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                    Secure Your Digital Infrastructure <br />
                    for the <span className="text-[#FFD700]">Future.</span>
                </h2>
                <p className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto italic opacity-90">
                    &quot;Stability is the bedrock of scale. We ensure your foundation is
                    immovable so your growth can be unstoppable.&quot;
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-[#FFD700] text-slate-900 px-10 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#FFA500] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold-500/20"
                    >
                        Request Support Proposal
                    </button>
                    <button className="border border-white/20 text-white px-10 py-4 rounded-md font-medium uppercase tracking-widest text-xs md:text-sm hover:bg-white/5 active:scale-95 transition-all">
                        SLA Documentation
                    </button>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="support-cta-proposal"
                title="Request Support Proposal"
                subtitle="Partner with TRADEVASTU ENTERPRISES for long-term technology management and scaling."
            />
        </section>
    );
}
