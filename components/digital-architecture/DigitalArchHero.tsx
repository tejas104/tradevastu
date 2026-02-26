"use client";

import { useState } from "react";
import Link from "next/link";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function DigitalArchHero() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="bg-[#1E293B] dark:bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(255,215,0,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.32) 1px, transparent 1px)",
                    backgroundSize: "56px 56px"
                }} />
            </div>
            <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[#FFD700]/15 blur-3xl" />

            <div className="max-w-7xl mx-auto relative px-4 z-10">
                <div className="grid lg:grid-cols-[1fr_0.72fr] gap-10 items-end">
                    <div className="max-w-3xl animate-reveal">
                        <p className="text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-4 opacity-90">
                            Institutional-Grade Architecture
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                            Conversion-Focused{" "}
                            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                                Digital Architecture
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl opacity-95">
                            We engineer high-performance web systems and robust backend architectures
                            designed to handle enterprise-level traffic while maintaining successful lead
                            flows for Indian real estate leaders.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] px-8 py-3.5 rounded-md font-bold uppercase tracking-wide text-xs md:text-sm hover:scale-105 active:scale-95 transition-all hover-glow"
                            >
                                Audit Your Architecture
                            </button>
                            <Link href="#core-infrastructure" className="border border-white/30 text-white px-8 py-3.5 rounded-md font-medium uppercase tracking-wide text-xs md:text-sm hover:bg-white/10 active:scale-95 transition-all">
                                View Capabilities
                            </Link>
                        </div>
                    </div>

                    <div className="animate-reveal" style={{ animationDelay: "0.15s" }}>
                        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm p-6 sm:p-8">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#FFD700] font-bold mb-3">Architecture Outcomes</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl bg-black/30 p-4">
                                    <p className="text-2xl font-display font-bold">90+</p>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-300">Perf score target</p>
                                </div>
                                <div className="rounded-xl bg-black/30 p-4">
                                    <p className="text-2xl font-display font-bold">99.9%</p>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-300">Uptime design</p>
                                </div>
                                <div className="col-span-2 rounded-xl border border-white/15 bg-black/20 p-4">
                                    <p className="text-sm text-gray-200 leading-relaxed">
                                        Built for rapid growth cycles with secure integrations, lead-safe workflows, and measurable deployment governance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="audit-your-architecture"
                title="Audit Your Architecture"
                subtitle="Share your details and we'll analyze your current digital infrastructure."
            />
        </section>
    );
}
