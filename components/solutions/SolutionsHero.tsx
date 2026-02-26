"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

const tabs = ["Real Estate", "SME Solutions", "Export Tech"];

const tabContent = {
    "Real Estate": {
        headline: "Real Estate Sales Control Layer",
        summary:
            "Designed for developers handling site teams, channel partners, and high lead velocity across multiple projects.",
        bullets: [
            "Project-wise lead routing and source quality scoring",
            "Broker onboarding, commission visibility, and payout guardrails",
            "RERA-aligned communication logs and audit-ready workflows",
            "Sales desk SLA alerts to reduce lead leakage in peak campaigns",
        ],
        outcomes: ["Faster response cycles", "Higher visit-to-booking ratio", "Compliance-ready operations"],
    },
    "SME Solutions": {
        headline: "SME Growth Operations Stack",
        summary:
            "Practical digital infrastructure for growing Indian businesses that need predictable execution with lean teams.",
        bullets: [
            "Centralized lead and customer pipeline across channels",
            "Automated follow-up sequences for sales and support teams",
            "Role-based dashboards for owners, managers, and frontline staff",
            "Process tracking for faster handoffs between teams",
        ],
        outcomes: ["Lower manual dependency", "Improved conversion consistency", "Clear team accountability"],
    },
    "Export Tech": {
        headline: "Export and Cross-Border Workflow Tech",
        summary:
            "Systems for export-driven businesses managing inquiries, documentation, and follow-through across markets.",
        bullets: [
            "Multi-stage inquiry qualification and region tagging",
            "Document workflow support for quotations and shipment handoffs",
            "Buyer communication timelines with internal ownership mapping",
            "Performance monitoring by market, category, and channel",
        ],
        outcomes: ["Stronger response discipline", "Fewer process drop-offs", "Higher buyer confidence"],
    },
} as const;

export default function SolutionsHero() {
    const [activeTab, setActiveTab] = useState("Real Estate");
    const [modalOpen, setModalOpen] = useState(false);
    const activeContent = tabContent[activeTab as keyof typeof tabContent];

    return (
        <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50/70 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
                    <h2 className="text-sm font-display font-bold text-gray-900 dark:text-gray-400 uppercase tracking-widest">
                        Deployment Strategies For High-Growth Sectors
                    </h2>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-[1.1] mb-12 animate-reveal">
                    Technology Infrastructure <br />
                    for <span className="text-gold-gradient italic">Real Estate Sales</span> <br className="hidden md:block" />
                    Organizations.
                </h1>

                <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed max-w-3xl mb-16">
                    Institutional-grade operational frameworks engineered specifically for
                    the complexities of Indian real estate, SME scaling, and international
                    trade ecosystems.
                </p>

                <div className="flex flex-wrap rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/50 p-1.5 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide shadow-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 md:px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all rounded-xl relative ${activeTab === tab
                                    ? "bg-[#1E293B] text-white dark:bg-[#FFD700] dark:text-[#1E293B]"
                                    : "text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 animate-reveal" style={{ animationDelay: "0.2s" }}>
                    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800/60 p-6 md:p-8 shadow-sm">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#EAB308] mb-3">Active Solution Track</p>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3">{activeContent.headline}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">{activeContent.summary}</p>

                        <ul className="space-y-3">
                            {activeContent.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-[#EAB308] mt-0.5 flex-shrink-0" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50/90 dark:bg-slate-900/70 p-6 md:p-8 shadow-sm">
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">Business Outcomes</p>
                        <div className="space-y-3 mb-8">
                            {activeContent.outcomes.map((outcome) => (
                                <div key={outcome} className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {outcome}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setModalOpen(true)}
                            className="w-full bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-8 py-3.5 rounded-md font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 active:scale-95 transition-all shadow-lg shadow-slate-200 dark:shadow-none inline-flex items-center justify-center gap-2"
                        >
                            Discuss This Solution <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="solutions-hero-explore"
                title="Explore Industry Solutions"
                subtitle="Connect with our experts to find the right technology framework for your business."
            />
        </section>
    );
}
