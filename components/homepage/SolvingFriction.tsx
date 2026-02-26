"use client";

import { MoveUp, Droplet, Settings, Lock } from "lucide-react";

export default function SolvingFriction() {
  const features = [
    {
      icon: MoveUp,
      title: "Seamless Field Operations",
      description: "Tool that mobilizes site visits, inventory, and sales teams into smart workflows.",
    },
    {
      icon: Droplet,
      title: "Lead Leakage",
      description: "Stop lead dissipation due to unstructured processes or manual error during high-volume transactions.",
    },
    {
      icon: Settings,
      title: "Process Simplicity",
      description: "Intuitive and well-structured sales communication that converts.",
    },
    {
      icon: Lock,
      title: "Sensor Privacy",
      description: "Secure and anonymous data processing that maintains client information privacy.",
    },
  ];

  return (
    <section className="bg-[#1E293B] dark:bg-slate-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto animate-reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tighter-premium">
            Solving <span className="text-white-gold-gradient">Institutional Friction</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto opacity-80">
            We eradicate the structural friction that drags high-growth, high-volume businesses down, freeing your teams to focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover-lift group hover:bg-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-[0.05] transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#EAB308] group-hover:text-[#1E293B] transition-all transform group-hover:rotate-6">
                    <Icon className="w-6 h-6 text-[#EAB308] group-hover:text-inherit transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-80">
                    {feature.description}
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
