"use client";

import { CheckCircle, Sparkles, Monitor } from "lucide-react";
import Link from "next/link";

export default function EnterpriseSolutions() {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Sales Infrastructure",
      description: "Build a robust sales infrastructure that scales with your business growth and adapts to market changes.",
      href: "/sales-infrastructure",
    },
    {
      icon: Sparkles,
      title: "Client Optimization",
      description: "Optimize client relationships with intelligent CRM tools and personalized engagement strategies.",
      href: "/crm-optimization",
    },
    {
      icon: Monitor,
      title: "Digital Architecture",
      description: "Modern digital architecture designed for seamless integration and future-proof scalability.",
      href: "/digital-architecture",
    },
  ];

  return (
    <section id="solutions" className="bg-white dark:bg-slate-900 py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tighter-premium">
            Enterprise <span className="text-black-gold-gradient dark:text-white-gold-gradient">Solutions</span>
          </h2>
          <div className="w-12 md:w-16 h-1 bg-black-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all hover-lift"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#EAB308] group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#EAB308] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-[#EAB308] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm opacity-90">
                  {solution.description}
                </p>
                <Link
                  href={solution.href}
                  className="text-[#1E293B] font-bold text-xs uppercase tracking-widest hover:text-[#EAB308] transition-all inline-flex items-center gap-2 group-link"
                >
                  READ MORE <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
