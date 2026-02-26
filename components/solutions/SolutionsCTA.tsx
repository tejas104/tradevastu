"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function SolutionsCTA() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-center transition-colors duration-300">
            <div className="max-w-4xl mx-auto animate-reveal">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                    Optimize Your Industry Operations
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed italic opacity-80">
                    Join the leading Indian developers who have automated their sales
                    infrastructure for the modern age.
                </p>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-12 py-4 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(30,41,59,0.1)] dark:shadow-none"
                >
                    Book Industry Strategy Call
                </button>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                source="solutions-book-strategy-call"
                title="Book Strategy Call"
                subtitle="Schedule a deep-dive call to optimize your industry operations."
            />
        </section>
    );
}
