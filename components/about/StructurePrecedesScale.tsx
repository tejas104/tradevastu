import { Target, Users, TrendingUp, Compass } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Precision",
        description: "Excellence in every line of code and every workflow transition, ensuring no data loss and absolute reliability.",
    },
    {
        icon: Users,
        title: "Accountability",
        description: "Defining ownership in every component of the deployment process to ensure institutional grade results.",
    },
    {
        icon: TrendingUp,
        title: "Scalability",
        description: "Systems designed to handle 10x growth without performance degradation or architecture restructuring.",
    },
    {
        icon: Compass,
        title: "Long-Term Thinking",
        description: "Prioritizing durable solutions over short-term hacks to protect your enterprise's digital equity.",
    },
];

export default function StructurePrecedesScale() {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100/70 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-reveal">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6 italic">
                        Structure Precedes Scale
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        In the rapidly evolving Indian market, raw ambition often outpaces
                        operational security. We believe that sustainable expansion is impossible
                        without a right technological foundation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 animate-reveal" style={{ animationDelay: "0.2s" }}>
                    {values.map((v, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/85 dark:bg-slate-800/80 p-7 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent opacity-80" />
                            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#EAB308] transition-colors">
                                <v.icon className="w-6 h-6 text-[#EAB308] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed opacity-90">{v.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
