import { ShieldCheck, Zap, UserCheck } from "lucide-react";

export default function PartnershipValues() {
    const values = [
        {
            icon: ShieldCheck,
            title: "Uncompromising Security",
            description: "We treat your data with the highest institutional respect, implementing military-grade protocols."
        },
        {
            icon: Zap,
            title: "Infinite Scalability",
            description: "Our architectures are built to grow from 1,000 to 1,000,000 users without architecture pivots."
        },
        {
            icon: UserCheck,
            title: "Dedicated Management",
            description: "You gain a technology partner, not just a vendor. We are embedded in your success."
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                            Partnership Values Rooted in <br />
                            <span className="text-[#FFD700] italic">Sustained Performance.</span>
                        </h2>

                        <div className="space-y-12">
                            {values.map((value, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="mt-1">
                                        <value.icon className="w-8 h-8 text-[#FFD700]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                                        <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#FFD700]/10 rounded-3xl blur-2xl" />
                        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-4">
                            {/* Simple mockup of a dashboard chart */}
                            <div className="bg-slate-800/50 rounded-xl p-6 h-64 flex flex-col justify-end gap-4">
                                <div className="flex items-end gap-2 h-32">
                                    <div className="w-full bg-slate-700 rounded-t h-1/4" />
                                    <div className="w-full bg-slate-700 rounded-t h-1/2" />
                                    <div className="w-full bg-[#FFD700]/50 rounded-t h-3/4" />
                                    <div className="w-full bg-[#FFD700] rounded-t h-full" />
                                    <div className="w-full bg-slate-700 rounded-t h-2/3" />
                                    <div className="w-full bg-slate-700 rounded-t h-1/2" />
                                    <div className="w-full bg-[#FFD700] rounded-t h-5/6" />
                                </div>
                                <div className="flex justify-between text-[10px] text-slate-500 font-mono uppercase">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-[#FFD700]" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold">Inbound Leads</p>
                                        <p className="text-slate-500 text-xs">+24% from last week</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-white text-sm font-mono font-bold">1,248</p>
                                    <div className="h-1 w-12 bg-[#FFD700] ml-auto mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Activity } from "lucide-react";
