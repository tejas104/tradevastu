"use client";

import { FileCheck, Network, Shield, Zap, Database, MapPinned, Radar } from "lucide-react";

export default function LocalizedExpertise() {
  const metrics = [
    { value: "45L+", label: "Deal Value Mapped" },
    { value: "98%", label: "Avg. ROI Achieved" },
    { value: "36h", label: "Avg. Conversion Cycle" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Regulatory Assurance",
      description: "Baked-in compliance tracking ensuring every lead journey stays within regional regulatory bounds.",
    },
    {
      icon: Zap,
      title: "Speed to Lead",
      description: "Localized routing algorithms that connect high-intent buyers to site-teams in sub-60 seconds.",
    },
    {
      icon: Database,
      title: "Data Sovereignty",
      description: "Regional data residency and localized cloud infrastructure for maximum security and performance.",
    },
  ];

  return (
    <section id="expertise" className="bg-white dark:bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 lg:p-12">
          <div className="absolute -top-16 -right-20 h-56 w-56 rounded-full bg-[#EAB308]/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-20 h-56 w-56 rounded-full bg-[#1E293B]/10 dark:bg-white/10 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
            <div className="animate-reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EAB308]/30 bg-[#EAB308]/10 px-4 py-2 mb-6">
                <Radar className="w-4 h-4 text-[#1E293B] dark:text-[#EAB308]" />
                <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#1E293B] dark:text-[#EAB308]">
                  Localized Expertise Layer
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                Built for Regional Buying Behavior, <span className="text-black-gold-gradient dark:text-white-gold-gradient">Not Generic Pipelines</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Indian real estate demand shifts by city, ticket size, and channel velocity. Our frameworks align field teams, lead routing, and compliance into one localized operating model.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {metrics.map((metric, index) => (
                  <div key={index} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/60 p-4">
                    <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wider mt-1 text-gray-500 dark:text-gray-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-800/50 p-4">
                  <FileCheck className="w-5 h-5 mt-0.5 text-[#EAB308]" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Operational Compliance Framework</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      State-wise documentation controls and transparent approval workflows for every lead journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-800/50 p-4">
                  <Network className="w-5 h-5 mt-0.5 text-[#EAB308]" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Lead Source Integration</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Channel-aware routing logic that matches project inventory, location, and site team response speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
              <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-slate-800/70 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
                    Localized Lead Intelligence Grid
                  </h3>
                  <MapPinned className="w-6 h-6 text-[#EAB308]" />
                </div>

                <div className="space-y-4">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-slate-900/60 p-4 sm:p-5 transition-all hover:border-[#EAB308]/50 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                          <feature.icon className="w-5 h-5 text-[#EAB308] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#1E293B] dark:bg-slate-900 text-white p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#EAB308] font-bold">Why it works</p>
                  <p className="text-sm text-gray-200 mt-2">
                    This architecture adapts to market-level behavior in each city while preserving enterprise-level control and visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
