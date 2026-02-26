"use client";

import { FileStack, GitBranch, RefreshCw, Eye } from "lucide-react";

export default function StructuralInefficiencies() {
  const inefficiencies = [
    {
      icon: FileStack,
      title: "Lead Fragmentation",
      description: "Lost leads due to various spreadsheets and multiple platforms not communicating.",
    },
    {
      icon: GitBranch,
      title: "Ill Structured Pipeline",
      description: "Loss of deal and buyer status in between sales process and visual flows.",
    },
    {
      icon: RefreshCw,
      title: "Weak Follow-up Systems",
      description: "Manual workflow leads to 50% of incoming leads not getting the 1st human touch.",
    },
    {
      icon: Eye,
      title: "Zero Performance Visibility",
      description: "Leadership cannot see in real-time if a sales quota will be attained.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2 tracking-tighter-premium inline-block">
            Structural Inefficiencies
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inefficiencies.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-white/5 hover:shadow-xl dark:shadow-none transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold-gradient" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
