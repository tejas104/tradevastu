import { Layout, Users2, FileSpreadsheet, Layers, Map, UserSquare, Wallet } from "lucide-react";

const mainFeatures = [
    {
        title: "Channel Partner Complexity",
        description: "Managing 100+ external brokers with transparent payout tracking and lead protection.",
    },
    {
        title: "Lead Distribution",
        description: "Automated round-robin allocation to sales desks based on performance and availability.",
    },
    {
        title: "Compliance Reporting",
        description: "One-click RERA documentation and audit trails for all customer interactions.",
    },
];

const subFeatures = [
    { icon: Layout, title: "Pipeline by Project" },
    { icon: FileSpreadsheet, title: "Inventory Mapping" },
    { icon: UserSquare, title: "Broker Management" },
    { icon: Wallet, title: "Commission Tracking" },
];

export default function RealEstateSolutions() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-reveal">
                    <p className="text-[10px] font-bold text-[#EAB308] uppercase tracking-[0.3em] mb-4">INDUSTRY DEEP DIVE</p>
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                        Solutions Tailored for Real Estate
                    </h2>
                    <div className="h-0.5 w-12 bg-[#EAB308] mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
                    {mainFeatures.map((f, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-700 hover:border-[#EAB308]/20 transition-all hover-lift hover:shadow-xl dark:shadow-none">
                            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4 text-base md:text-lg">{f.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed opacity-90">{f.description}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {subFeatures.map((f, i) => (
                        <div key={i} className="flex flex-col items-start gap-4 p-4 border border-gray-100 dark:border-white/5 rounded-lg shadow-sm">
                            <f.icon className="w-5 h-5 text-[#EAB308]" />
                            <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm">{f.title}</h4>
                            <p className="text-[10px] text-gray-400 leading-relaxed">Granular tracking through phase developments.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
