import { Building2, Factory, Globe, ArrowRight } from "lucide-react";

const industries = [
    {
        icon: Building2,
        title: "Real Estate",
        description: "Lead routing, broker collaboration, site-visit workflows, and compliance-ready sales operations for developers.",
        highlight: "High-volume project sales",
    },
    {
        icon: Factory,
        title: "SMEs",
        description: "Execution systems for growing teams that need clear ownership, faster follow-up, and measurable conversion discipline.",
        highlight: "Lean team productivity",
    },
    {
        icon: Globe,
        title: "Export Businesses",
        description: "Cross-border process frameworks for inquiry handling, document handoffs, and market-wise pipeline visibility.",
        highlight: "Cross-border reliability",
    },
];

export default function IndustriesGrid() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 md:mb-12 text-center">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#EAB308] mb-3">Sector Focus</p>
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">Where We Create Fastest Impact</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {industries.map((item, i) => (
                        <div key={i} className="bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm group hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10 group-hover:bg-[#EAB308] transition-colors">
                                <item.icon className="w-6 h-6 text-[#EAB308]" />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-2">{item.highlight}</p>
                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{item.description}</p>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#1E293B] dark:text-[#EAB308] uppercase tracking-widest">
                                Active Solution Track <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
