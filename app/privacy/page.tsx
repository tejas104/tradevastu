import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | TRADEVASTU ENTERPRISES",
  description: "Privacy policy for TRADEVASTU ENTERPRISES website and lead forms.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(30,41,59,0.08),transparent_45%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-gradient font-bold mb-4">
              Privacy & Data Stewardship
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl">
              Last updated: February 25, 2026
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Overview
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                TRADEVASTU ENTERPRISES collects contact and business information you submit through our site
                to respond to inquiries, evaluate project fit, and deliver requested services.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Information We Collect
              </h2>
              <ul className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5 space-y-2">
                <li>Name, business email, and phone number</li>
                <li>Company name, industry, and size</li>
                <li>Project scope, budget range, and requirements you provide</li>
                <li>Optional website or referral source details</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How We Use Your Data
              </h2>
              <ul className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5 space-y-2">
                <li>Respond to inquiries and schedule consultations</li>
                <li>Prepare proposals and project readiness assessments</li>
                <li>Improve service delivery and internal operations</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Sharing
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                We do not sell your personal information. Data may be processed by trusted service providers
                used to operate this website and our internal workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Retention & Security
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain data only as long as needed to fulfill the purpose it was collected for, or to comply
                with legal obligations. We implement standard security controls to protect stored data.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Contact
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                For privacy requests or questions, email{" "}
                <a className="text-[#1E293B] dark:text-[#FFD700] font-semibold hover:opacity-80" href="mailto:info@tradevastu.com">
                  info@tradevastu.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
