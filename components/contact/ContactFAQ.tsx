"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What happens after I submit the consultation request?",
        answer: "Your request is routed to a senior strategy consultant. Within 24 business hours, we conduct a preliminary background audit of your firm and reach out to schedule a 30-minute discovery call to discuss technical requirements and strategic alignment."
    },
    {
        question: "Does TRADEVASTU ENTERPRISES provide dedicated on-site support?",
        answer: "Yes, our Managed Support packages include options for dedicated on-site engineering and sales team training, primarily for institutional-grade developers in Tier-1 Indian cities."
    },
    {
        question: "How is the pricing structured for custom projects?",
        answer: "Every project is bespoke. Pricing is based on the complexity of your current tech chaos, the scale of your sales ecosystem, and the specific performance gains we target. We provide clear, fixed-milestone pricing after the discovery session."
    },
    {
        question: "Can you integrate with our existing legacy CRM?",
        answer: "We specialize in 'Institutional Bridge Engineering' – creating high-performance connectors for legacy systems or facilitating a smooth transition to modern, scalable CRM architectures like Salesforce or Zoho."
    }
];

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 animate-reveal">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
                        Institutional <span className="text-[#EAB308]">Engagement FAQ</span>
                    </h2>
                    <div className="h-0.5 w-12 bg-gold-gradient mx-auto mt-4" />
                </div>

                <div className="space-y-4 animate-reveal" style={{ animationDelay: "0.2s" }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden hover:border-[#EAB308]/30 transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors"
                            >
                                <span className="text-sm md:text-base font-display font-bold text-gray-900 dark:text-white pr-8">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#1E293B] dark:bg-[#FFD700] border-[#1E293B] dark:border-[#FFD700]' : 'bg-white dark:bg-slate-800'}`}>
                                    {openIndex === i ? (
                                        <Minus className="w-4 h-4 text-[#FFD700] dark:text-[#1E293B]" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="p-6 pt-0 border-t border-gray-50 dark:border-white/5">
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed opacity-90">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
