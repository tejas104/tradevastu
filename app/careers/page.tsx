import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Careers | TRADEVASTU ENTERPRISES",
  description: "Explore opportunities at TRADEVASTU ENTERPRISES.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#EAB308] mb-4">Careers</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Build High-Impact Systems With Us</h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            We are building institutional-grade sales infrastructure for high-growth businesses. If you care about clean engineering, measurable outcomes, and long-term system design, write to us.
          </p>
          <a
            href="mailto:info@tradevastu.com?subject=Careers%20at%20TRADEVASTU"
            className="inline-flex items-center rounded-md bg-[#1E293B] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2c3e5a] transition-colors"
          >
            Apply via Email
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
