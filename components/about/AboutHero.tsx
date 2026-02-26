"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function AboutHero() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#EAB308]/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#1E293B]/10 dark:bg-white/5 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-[1fr_0.7fr] gap-10 items-end">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-[#EAB308]/30 bg-[#EAB308]/10 px-4 py-2">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
                            <h2 className="text-[11px] font-display font-bold text-gray-900 dark:text-gray-300 uppercase tracking-[0.25em]">
                                Institutional Excellence
                            </h2>
                        </div>

                        <div className="max-w-4xl animate-reveal">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-[1.1] mb-8">
                                Engineering <span className="text-gold-gradient italic">Structure</span> Into{" "}
                                <br className="hidden md:block" />
                                Growing Businesses<span className="text-[#EAB308]">.</span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl leading-relaxed max-w-3xl mb-10 opacity-95">
                                <span className="text-black dark:text-white font-bold">TRADEVASTU ENTERPRISES</span> is the premier technology partner for Indian
                                enterprises, specializing in the architecture of sales infrastructure and
                                sophisticated CRM ecosystems.
                            </p>
                            <button
                                onClick={() => setModalOpen(true)}
                                className="bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-10 py-4 rounded-md font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none"
                            >
                                Initiate Strategic Discussion
                            </button>
                        </div>
                    </div>

                    <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
                        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/60 p-6 sm:p-8">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#EAB308] mb-3">Culture Snapshot</p>
                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Built on process over improvisation</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                                We replace ad-hoc execution with structured systems, documented operations, and measured outcomes for each growth stage.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl bg-[#1E293B] text-white p-4">
                                    <p className="text-2xl font-display font-bold">100%</p>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-300">Doc-first delivery</p>
                                </div>
                                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 p-4">
                                    <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">24h</p>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Ops response target</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="about-hero-initiate"
                title="Initiate Strategic Discussion"
                subtitle="Share your enterprise goals and let's explore a strategic technology partnership."
            />
        </section>
    );
}
