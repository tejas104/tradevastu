"use client";

import { Download, ChevronRight } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E293B] dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-gradient rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center animate-reveal">
                <p className="text-[10px] font-bold text-[#EAB308] uppercase tracking-[0.4em] mb-6">Trusted by 500+ Indian Enterprises</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-10 tracking-tight leading-tight">
                    Let&apos;s Engineer Your <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                        Sales Infrastructure
                    </span>
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="https://wa.me/917558516577"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-gold-gradient text-[#1E293B] px-8 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-110 active:scale-95 transition-all hover-glow flex items-center justify-center gap-2"
                    >
                        Schedule Strategic Discussion
                        <ChevronRight className="w-4 h-4" />
                    </a>

                    <button className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2">
                        Download Enterprise Brochure
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
