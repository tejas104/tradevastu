"use client";

import { Layers, Shield, LayoutDashboard, Workflow, Target, BarChart3 } from "lucide-react";

export default function InfrastructureMatrix() {
  const components = [
    {
      icon: Layers,
      title: "Integrated Architecture",
      description: "Custom-built for your specific use cases. Non-flat, non-siloed architecture and seamless documentation.",
    },
    {
      icon: Shield,
      title: "Role Based Access",
      description: "Granular security ensures teams can see just what's relevant to management's needs and compliance.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard & KPI Tracking",
      description: "Real-time visual monitoring of lead pipeline, conversion rates, and revenue KPIs for every window.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automated follow-ups, notifications, task assignments, and internal task reminders triggered by deal behaviors.",
    },
    {
      icon: Target,
      title: "Lead Assignment Logic",
      description: "Geographic, role, lead source, and other attributes to route the right leads to the right salesperson automatically.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Forecasting",
      description: "Weekly automated insights delivered to leadership to predict the trends on sales team's pipeline.",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tighter-premium">
            The Infrastructure Matrix
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 uppercase tracking-wider">
            KEY COMPONENTS OF YOUR SALES ENGINE
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-white/5 rounded-xl p-8 transition-all duration-300 hover:shadow-xl dark:shadow-none hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-xl bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity -z-10"></div>
                <div style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                  opacity: 0
                }} className="absolute inset-0 rounded-xl group-hover:opacity-100 transition-opacity -z-10"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-gradient transition-colors">
                    <Icon className="w-7 h-7 text-[#1E293B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {component.description}
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
