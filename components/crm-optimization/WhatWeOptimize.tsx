"use client";

import { GitBranch, Cog, MessageCircle, Mail, Layers, Target } from "lucide-react";

export default function WhatWeOptimize() {
  const optimizations = [
    {
      icon: GitBranch,
      title: "Pipeline Restructuring",
      description: "Redesign your sales pipeline with optimized stages that align with your sales process and maximize conversion rates.",
    },
    {
      icon: Cog,
      title: "Workflow Automation",
      description: "Automate repetitive tasks, follow-up sequences, and notifications to free up your team for high-value activities.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      description: "Seamlessly integrate WhatsApp for direct customer communication and lead nurturing within your CRM ecosystem.",
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Intelligent email sequences that nurture leads, follow up automatically, and ensure no opportunity is missed.",
    },
    {
      icon: Layers,
      title: "Lead Scoring",
      description: "Implement data-driven lead scoring models that prioritize high-value prospects and improve sales efficiency.",
    },
    {
      icon: Target,
      title: "API Integrations",
      description: "Connect your CRM with essential business tools and platforms for unified data management and streamlined operations.",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tighter-premium">
            What We Optimize
          </h2>
          <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto opacity-80">
            Our optimization framework touches every part of your CRM to create a revenue engine for revenue growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {optimizations.map((optimization, index) => {
            const Icon = optimization.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover-lift dark:shadow-none"
              >
                <div className="absolute inset-0 rounded-xl bg-gold-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity -z-10"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FFD700] transition-all transform group-hover:rotate-6">
                    <Icon className="w-7 h-7 text-[#EAB308] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors group-hover:text-[#EAB308]">
                    {optimization.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm opacity-90">
                    {optimization.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
