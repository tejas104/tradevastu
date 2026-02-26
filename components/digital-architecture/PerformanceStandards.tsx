import { Gauge, Smartphone, Database, Search } from "lucide-react";

const metrics = [
    {
        icon: Gauge,
        score: "90+",
        label: "Lighthouse Score",
        description: "Consistent site performance benchmarks on every environment.",
    },
    {
        icon: Smartphone,
        label: "Mobile Optimised",
        description: "Responsive design ensures a premium experience across all screen sizes.",
    },
    {
        icon: Database,
        label: "Structured Data",
        description: "Semantic markup to support multi-platform data integrity.",
    },
    {
        icon: Search,
        label: "SEO Ready",
        description: "Technical SEO optimizations built into every page to maximize online presence.",
    },
];

export default function PerformanceStandards() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
                    <h2 className="text-sm font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest">
                        Performance Standards
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800/80 p-6 transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl border border-[#FFD700]/40 bg-[#FFD700]/10 flex items-center justify-center mb-4 group-hover:bg-[#FFD700] transition-colors">
                                {m.score ? (
                                    <span className="text-base font-bold text-[#1E293B] group-hover:text-white">{m.score}</span>
                                ) : (
                                    <m.icon className="w-5 h-5 text-[#FFD700] group-hover:text-white" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{m.label}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{m.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
