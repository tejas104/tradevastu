"use client";

import { Building2, Users, Map, Banknote, LogOut, Database, Wand2, BarChart3 } from "lucide-react";

export default function RealEstateComplexity() {
    const features = [
        {
            icon: Building2,
            title: "Inventory Mgmt",
        },
        {
            icon: Users,
            title: "Broker Network",
        },
        {
            icon: Map,
            title: "Portal Sync",
        },
        {
            icon: Banknote,
            title: "Payment Milestones",
        },
    ];

    return (
        <section className="bg-[#0B1221] dark:bg-slate-950 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-10 animate-reveal">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                                Designed for <br />
                                <span className="text-white-gold-gradient">REAL ESTATE COMPLEXITY</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-xl opacity-80">
                                Real estate sales cycles are long, multi-stakeholder, and data-heavy. Generic CRMs fail. We build tailored architectures that speak the language of inventory and brokers.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 group"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors">
                                        <feature.icon className="w-6 h-6 text-[#FFD700]" />
                                    </div>
                                    <span className="text-white font-medium">{feature.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Automation Flow Visual */}
                    <div className="relative animate-reveal" style={{ animationDelay: '0.2s' }}>
                        <div className="flex flex-col items-center">

                            {/* Heading for the flow */}
                            <div className="text-center mb-8 space-y-1">
                                <p className="text-xs sm:text-sm md:text-base font-bold text-white/90 tracking-tight">
                                    Automation Is Not About
                                </p>
                                <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFD700] uppercase tracking-tighter">
                                    Replacing People
                                </p>
                            </div>

                            {/* Vertical Flow Container */}
                            <div className="relative flex flex-col items-center w-full max-w-[280px] space-y-8">

                                {/* Connecting Lines (Vertical) */}
                                <div className="absolute top-10 bottom-10 w-[1px] bg-gradient-to-b from-[#FFD700]/20 via-[#FFD700]/60 to-[#FFD700]/20 z-0" />

                                {/* Step 1: Lead Sources */}
                                <div className="relative z-10 w-full bg-[#1A2233]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl flex flex-col items-center text-center group hover:border-[#FFD700]/30 transition-all">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FFD700]/10 transition-colors">
                                        <LogOut className="w-5 h-5 text-[#FFD700] rotate-180" />
                                    </div>
                                    <h3 className="text-white font-bold text-base">Lead Sources</h3>
                                    <p className="text-gray-400 text-[11px] mt-1">Social, Portals, Web</p>
                                </div>

                                {/* Step 2: CRM Core */}
                                <div className="relative z-10 w-full bg-[#1A2233]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl flex flex-col items-center text-center group hover:border-[#FFD700]/30 transition-all">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FFD700]/10 transition-colors">
                                        <Database className="w-5 h-5 text-[#FFD700]" />
                                    </div>
                                    <h3 className="text-white font-bold text-base">CRM Core</h3>
                                    <p className="text-gray-400 text-[11px] mt-1">The Unified Hub</p>
                                </div>

                                {/* Step 3: Automation */}
                                <div className="relative z-10 w-full bg-[#1A2233]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl flex flex-col items-center text-center group hover:border-[#FFD700]/30 transition-all">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FFD700]/10 transition-colors">
                                        <Wand2 className="w-5 h-5 text-[#FFD700]" />
                                    </div>
                                    <h3 className="text-white font-bold text-base">Automation</h3>
                                    <p className="text-gray-400 text-[11px] mt-1">Triggers & Workflows</p>
                                </div>

                                {/* Step 4: Reporting (Highlighted) */}
                                <div className="relative z-1 w-full bg-[#FFD700] rounded-xl p-4 shadow-[0_0_30px_rgba(255,215,0,0.2)] flex flex-col items-center text-center transform scale-105 transition-transform">
                                    <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                                        <BarChart3 className="w-5 h-5 text-[#1A2233]" />
                                    </div>
                                    <h3 className="text-[#1A2233] font-black text-lg">Reporting</h3>
                                    <p className="text-[#1A2233]/80 font-bold text-[11px] mt-0.5">Actionable Intelligence</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
