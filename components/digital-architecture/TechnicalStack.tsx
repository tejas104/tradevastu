const stack = [
    {
        label: "NEXT",
        name: "Frontend",
        color: "bg-black",
        points: [
            "Server-side rendering for instant load performance",
            "Seamless page transitions and user experience",
            "Framer Motion animations",
        ],
    },
    {
        label: "NPX",
        name: "Backend",
        color: "bg-[#1E293B]",
        points: [
            "Secure, serverless execution engine with enterprise-level page performance",
            "API Key Management",
            "Auth Middleware",
        ],
    },
    {
        label: "SB",
        name: "Database",
        color: "bg-emerald-700",
        points: [
            "Highly scalable systems requiring data integrity in low-latency table reads",
            "Auto backup",
            "Data compliance",
        ],
    },
    {
        label: "VCEL",
        name: "Hosting",
        color: "bg-gray-800",
        points: [
            "99.99% uptime with instant global CDN for both static assets and server preservation",
            "Analytics",
            "Open data compliance",
        ],
    },
];

export default function TechnicalStack() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E293B] dark:bg-black transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 animate-reveal">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">The Technical Stack</h2>
                    <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.2em] font-semibold">
                        Institutional-Grade Architecture
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 animate-reveal" style={{ animationDelay: "0.2s" }}>
                    {stack.map((s, i) => (
                        <div key={i} className="bg-white/95 dark:bg-slate-900 rounded-xl p-6 border border-white/20 shadow-xl transition-all hover-lift hover:shadow-2xl">
                            <div className={`w-12 h-12 ${s.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                                <span className="text-white text-[10px] font-bold">{s.label}</span>
                            </div>
                            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-3 text-sm md:text-base">{s.name}</h3>
                            <ul className="space-y-2">
                                {s.points.map((p, j) => (
                                    <li key={j} className="text-[10px] md:text-xs text-gray-600 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#EAB308] mt-1.5 flex-shrink-0" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-200">
                    <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        All Systems Operational
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                        24 Hour Deployment
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        Open-Data Compliant
                    </span>
                </div>
            </div>
        </section>
    );
}
