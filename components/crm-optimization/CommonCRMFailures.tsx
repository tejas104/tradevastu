"use client";

import { XCircle, Cog, TrendingDown, HelpCircle } from "lucide-react";

export default function CommonCRMFailures() {
  const failures = [
    {
      icon: XCircle,
      iconColor: "bg-red-100 text-red-600",
      title: "Poor Pipeline Configuration",
      description: "Inefficient pipeline stages and lack of proper lead qualification processes result in lost opportunities and decreased conversion rates.",
    },
    {
      icon: Cog,
      iconColor: "bg-orange-100 text-orange-600",
      title: "No Automation",
      description: "Manual processes consume valuable time and resources, leading to inconsistent follow-ups and delayed response times.",
    },
    {
      icon: TrendingDown,
      iconColor: "bg-purple-100 text-purple-600",
      title: "No Reporting Discipline",
      description: "Lack of comprehensive reporting makes it impossible to track performance, identify trends, and make data-driven decisions.",
    },
    {
      icon: HelpCircle,
      iconColor: "bg-blue-100 text-blue-600",
      title: "No Adoption Strategy",
      description: "Teams struggle with CRM adoption due to poor training, complex interfaces, and lack of clear value proposition.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-12 tracking-tighter-premium">
          Common CRM Failures
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {failures.map((failure, index) => {
            const Icon = failure.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-white/5 hover:shadow-xl dark:shadow-none transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${failure.iconColor} dark:bg-white/10 dark:text-white rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {failure.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {failure.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
