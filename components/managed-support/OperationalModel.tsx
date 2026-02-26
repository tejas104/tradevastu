import { ChevronRight } from "lucide-react";

const tiers = [
    {
        name: "Monthly Retainer",
        description: "Continuous daily management and support for high-impact digital infrastructures.",
        features: ["Priority Support", "Bug Fixes", "Deployment Support", "Security Monitoring"]
    },
    {
        name: "Quarterly Audit",
        description: "In-depth system integrity checks and optimization sessions every 90 days.",
        features: ["Performance Audit", "UX Review", "Stack Optimization", "Refactoring Planning"]
    },
    {
        name: "Priority Support SLA",
        description: "Guaranteed response times and dedicated engineering resources for critical environments.",
        features: ["< 4hr Response", "Dedicated Manager", "Emergency Patching", "Weekend Support"]
    }
];

export default function OperationalModel() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                            The Operational Support Model.
                        </h2>
                        <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            We offer structured support tiers designed to match the scale and
                            criticality of your digital operations, ensuring accountability
                            at every level.
                        </p>
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs">
                            <div className="h-0.5 w-8 bg-[#FFD700]" />
                            Defined SLAs & Accountability
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tiers.map((tier, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-white/5 flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{tier.name}</h3>
                                <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 flex-grow">{tier.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-gray-300">
                                            <ChevronRight className="w-3 h-3 text-[#FFD700] mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest border-b border-[#FFD700] pb-1 w-fit hover:border-slate-900 dark:hover:border-white transition-colors">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
