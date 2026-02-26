import { ClipboardCheck, FileText, Gauge, BarChart3 } from "lucide-react";

const standards = [
  {
    id: "01",
    icon: ClipboardCheck,
    title: "Structured Onboarding",
    description: "Rigorous onboarding protocols that align all stakeholders from day one of the mandate.",
  },
  {
    id: "02",
    icon: FileText,
    title: "Documentation-first",
    description: "Every process, logic, and integration is documented before a single line of code is released.",
  },
  {
    id: "03",
    icon: Gauge,
    title: "Clear SLM",
    description: "Consistent maintenance schedules to ensure system uptime that we stand behind.",
  },
  {
    id: "04",
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Automated real-time access to deployment progress and post-launch health metrics.",
  },
];

export default function OperationalStandards() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl border border-gray-100 dark:border-white/10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 lg:p-12">
          <div className="absolute -top-20 -right-16 h-52 w-52 rounded-full bg-[#EAB308]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#1E293B]/10 dark:bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
              <div>
                <p className="text-[11px] font-bold text-[#EAB308] uppercase tracking-[0.25em] mb-4">Execution Discipline</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-5">
                  Operational Standards
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  We run every engagement on a measured operating system so quality is repeatable, transparent, and enterprise-safe at every stage.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/70 p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold mb-2">Quality Promise</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Every deployment is tracked against defined milestones, documented controls, and measurable service outcomes.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
              {standards.map((s, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800/80 p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#EAB308]/70 to-transparent" />
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold text-[#EAB308] uppercase tracking-[0.2em]">{s.id}</span>
                    <div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                      <s.icon className="w-5 h-5 text-[#EAB308] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
