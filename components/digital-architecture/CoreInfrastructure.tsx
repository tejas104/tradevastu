import { Monitor, CreditCard, Target, Settings, LayoutDashboard, Code2 } from "lucide-react";

const solutions = [
    {
        icon: Monitor,
        title: "High-performance Websites",
        description: "Custom-built lightning-fast environments scaled to handle enterprise-level traffic while converting at scale.",
    },
    {
        icon: CreditCard,
        title: "Lending Systems",
        description: "Modular, scalable landing pages for results designed for higher performance on scaling leads.",
    },
    {
        icon: Target,
        title: "Lead Capture Logic",
        description: "Build and embed intelligent scoring systems tracking every touchpoint through the sales funnel.",
    },
    {
        icon: Settings,
        title: "CRM Integrations",
        description: "Seamlessly integrate with enterprise CRMs for an end-to-end and controlled sales journey.",
    },
    {
        icon: LayoutDashboard,
        title: "Dashboard Environments",
        description: "Custom admin panels providing real-time metrics, pipeline views, and conversion analytics.",
    },
    {
        icon: Code2,
        title: "Custom Architecture",
        description: "Bespoke tech stacks engineered specifically for your operational needs and scale targets.",
        badge: "REQUEST DETAILS",
    },
];

export default function CoreInfrastructure() {
    return (
        <section id="core-infrastructure" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12 animate-reveal">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs md:text-sm">
                        Core Infrastructure Solutions
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-reveal" style={{ animationDelay: "0.2s" }}>
                    {solutions.map((s, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/70 p-6 transition-all hover-lift hover:shadow-2xl">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#EAB308]/10 via-transparent to-[#1E293B]/10" />
                            <div className="relative z-10">
                                <div className="w-11 h-11 bg-[#FFD700]/10 rounded-lg border border-[#FFD700]/20 flex items-center justify-center mb-4 group-hover:bg-[#FFD700] group-hover:text-white transition-all transform group-hover:rotate-6">
                                    <s.icon className="w-5 h-5 transition-colors" />
                                </div>
                                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed opacity-90">{s.description}</p>
                                {s.badge && (
                                    <span className="inline-block mt-4 text-[10px] font-bold text-[#FFA500] uppercase tracking-widest border border-[#FFD700]/30 rounded px-2 py-0.5">
                                        {s.badge}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
