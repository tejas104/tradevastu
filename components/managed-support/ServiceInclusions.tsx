import { Shield, Activity, RefreshCw, Database, FileText } from "lucide-react";

const inclusions = [
    {
        icon: Database,
        title: "Hosting Management",
        description: "Full oversight of server clusters, ensuring 99.9% uptime and auto-scaling capabilities."
    },
    {
        icon: Activity,
        title: "System Monitoring",
        description: "24/7 real-time monitoring of application health, performance bottlenecks, and traffic spikes."
    },
    {
        icon: Shield,
        title: "Security Updates",
        description: "Proactive patching, firewall management, and regular penetration testing of all endpoints."
    },
    {
        icon: RefreshCw,
        title: "Backup Systems",
        description: "Automated, redundant backup protocols with point-in-time recovery for critical business data."
    },
    {
        icon: FileText,
        title: "Performance Reports",
        description: "Monthly deep-dives into Lighthouse scores, user experience metrics, and system efficiency."
    }
];

export default function ServiceInclusions() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Enterprise Service Inclusions</h2>
                    <div className="h-1 w-20 bg-[#FFD700] mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inclusions.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 border border-slate-100 dark:border-white/5 rounded-xl hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-none transition-all group"
                        >
                            <div className="w-12 h-12 bg-slate-50 dark:bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD700]/10 transition-colors">
                                <item.icon className="w-6 h-6 text-slate-600 dark:text-gray-400 group-hover:text-[#EAB308] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-slate-500 dark:text-gray-400 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}

                    {/* Placeholder for "And More" or special CTA card */}
                    <div className="p-8 bg-slate-900 dark:bg-slate-800 rounded-xl flex flex-col justify-center items-center text-center">
                        <p className="text-white font-bold mb-4">Custom Support Requirements?</p>
                        <button className="text-[#FFD700] text-sm font-bold uppercase tracking-widest hover:underline">
                            Contact Engineering
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
