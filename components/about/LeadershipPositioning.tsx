export default function LeadershipPositioning() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E293B] dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #EAB308 1px, transparent 0)", backgroundSize: "26px 26px" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-[11px] font-bold text-[#EAB308] uppercase tracking-[0.25em] mb-4">Leadership Lens</p>
                        <h2 className="text-4xl font-display font-bold text-white mb-8 italic">
                            Leadership Positioning
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Our collective identity is defined not by individuals, but by our engineering
                            culture. We are a multidisciplinary team of architects, developers, and
                            strategists who share a singular obsession: removing operational chaos
                            through technology.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            By blending deep domain knowledge of the Indian market with advanced
                            software engineering principles, we provide the leadership required to
                            guide complex digital transformations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 border border-white/10 p-8 rounded-xl flex flex-col justify-end min-h-[170px] backdrop-blur-sm">
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Scope</p>
                            <h3 className="font-display font-bold text-white">Technology Driven</h3>
                        </div>
                        <div className="bg-[#EAB308] p-8 rounded-xl flex flex-col justify-end min-h-[170px]">
                            <p className="text-[10px] font-bold text-[#1E293B] uppercase tracking-widest mb-1 italic">Architecture</p>
                            <h3 className="font-display font-bold text-[#1E293B]">Enterprise Standard</h3>
                        </div>
                        <div className="bg-white p-8 rounded-xl flex flex-col justify-end min-h-[170px]">
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Focus</p>
                            <h3 className="font-display font-bold text-[#1E293B] uppercase italic text-sm">Real Estate Infrastructure</h3>
                        </div>
                        <div className="bg-white/10 border border-white/10 p-8 rounded-xl flex flex-col justify-center min-h-[170px] items-center backdrop-blur-sm">
                            <div className="w-14 h-14 bg-[#EAB308]/20 rounded-xl mb-3" />
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Global Standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
