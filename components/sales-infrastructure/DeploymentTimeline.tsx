"use client";

import { Play, Code, CheckCircle, Rocket, HeadphonesIcon } from "lucide-react";

export default function DeploymentTimeline() {
  const phases = [
    {
      number: "1",
      icon: Play,
      title: "Phase 1 - Kickoff",
      description: "Onboarding, training, and setup of all required integrations.",
    },
    {
      number: "2",
      icon: Code,
      title: "Phase 2 - Development of Core Systems",
      description: "Custom development and configuration of CRM infrastructure tailored to your sales processes.",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Phase 3 - QA & Data Migration",
      description: "Comprehensive testing, data migration, and system validation to ensure seamless integration.",
    },
    {
      number: "4",
      icon: Rocket,
      title: "Phase 4 - Go-Live",
      description: "Deployment, team training, and transition to live operations with ongoing support.",
    },
    {
      number: "5",
      icon: HeadphonesIcon,
      title: "Phase 5 - Post-Deployment Support",
      description: "Continuous optimization, performance monitoring, and strategic enhancements for sustained growth.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2 tracking-tighter-premium">
            Deployment Timeline
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto mt-2"></div>
        </div>

        {/* Process Stepper */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gold-gradient"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gold-gradient rounded-full p-1 relative z-10 shadow-lg">
                        <div className="w-full h-full bg-[#1E293B] rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
