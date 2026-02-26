"use client";

import { Plus, Mail, CheckSquare, Calendar, Bell } from "lucide-react";

export default function HighFidelityArchitecture() {
  const layers = [
    {
      title: "Lead Sources",
      tags: ["paid ads", "seo", "referral"],
    },
    {
      title: "CRM Core",
      description: "Institutional-grade CRM for high-volume deal flow",
    },
    {
      title: "Automation Layer",
      icons: [Mail, CheckSquare, Calendar, Bell],
    },
  ];

  return (
    <section className="bg-[#1E293B] dark:bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFD700_1px,transparent_1px),linear-gradient(to_bottom,#FFD700_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gold-gradient mb-4 tracking-tighter-premium">
            High-Fidelity Sales Architecture
          </h2>
          <p className="text-xl text-white/90">
            Our expert-defined stack for maximum precision.
          </p>
        </div>

        <div className="space-y-8">
          {layers.map((layer, index) => {
            const isLast = index === layers.length - 1;

            return (
              <div key={index} className="relative">
                {/* Main Block */}
                <div className="relative bg-[#1E293B] rounded-lg p-6 transition-colors">
                  <div className="absolute inset-0 rounded-lg bg-gold-gradient opacity-30"></div>
                  <div className="absolute inset-0 rounded-lg bg-gold-gradient opacity-0 hover:opacity-100 transition-opacity" style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      {layer.title}
                    </h3>

                    {layer.tags && (
                      <div className="flex flex-wrap gap-2">
                        {layer.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-md text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {layer.description && (
                      <p className="text-white/80 text-sm mt-2">{layer.description}</p>
                    )}

                    {layer.icons && (
                      <div className="flex gap-4 mt-4">
                        {layer.icons.map((Icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="w-10 h-10 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 rounded-lg flex items-center justify-center border border-transparent"
                            style={{ borderImage: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.3) 50%, rgba(255, 215, 0, 0.3) 100%) 1' }}
                          >
                            <Icon className="w-5 h-5 text-gold-gradient" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector */}
                {!isLast && (
                  <div className="flex flex-col items-center my-4">
                    <div className="w-0.5 h-8 bg-gold-gradient"></div>
                    <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-[#1E293B]" />
                    </div>
                    <div className="w-0.5 h-8 bg-gold-gradient"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gold-gradient text-[#1E293B] px-10 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Personalize your engine
          </button>
        </div>
      </div>
    </section>
  );
}
