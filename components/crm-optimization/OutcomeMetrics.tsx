"use client";

import { CheckCircle2 } from "lucide-react";

export default function OutcomeMetrics() {
  const metrics = [
    {
      value: "40%",
      label: "Improved Follow-up Speed",
      checkmark: true,
    },
    {
      value: "100%",
      label: "Higher Accountability",
      checkmark: true,
    },
    {
      value: "2.5x",
      label: "Increase Visibility",
      checkmark: true,
    },
    {
      value: "65%",
      label: "Reduced Manual Effort",
      checkmark: true,
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2 tracking-tighter-premium">
            Outcome Metrics
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Data-driven improvements our clients experience post-optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-white/5 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {/* Background Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700]/5 to-[#FFA500]/5 rounded-full -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <p className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {metric.value}
                </p>
                <div className="flex items-center gap-2">
                  {metric.checkmark && (
                    <CheckCircle2 className="w-5 h-5 text-gold-gradient flex-shrink-0" />
                  )}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
