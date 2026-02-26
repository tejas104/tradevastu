"use client";

export default function ContactHero() {
    const scrollToForm = () => {
        const form = document.getElementById("contact-form");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="bg-[#1E293B] dark:bg-slate-950 text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center animate-reveal">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                    Initiate a Strategic <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent italic">
                        Conversation
                    </span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
                    Partner with <span className="text-white-gold-gradient">TRADEVASTU ENTERPRISES</span> to engineer your institutional sales infrastructure
                    and drive sustainable growth for the Indian market.
                </p>
                <button
                    onClick={scrollToForm}
                    className="bg-gold-gradient text-[#1E293B] px-8 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-110 active:scale-95 transition-all hover-glow shadow-xl shadow-gold-500/20 inline-flex items-center gap-2 group"
                >
                    Schedule Strategic Discussion
                    <span className="group-hover:translate-y-1 transition-transform">↓</span>
                </button>
            </div>
        </section>
    );
}
