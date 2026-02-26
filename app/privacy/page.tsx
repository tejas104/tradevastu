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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>Last updated: February 25, 2026</p>
          <p>
            TRADEVASTU ENTERPRISES collects contact and business information submitted through forms on this site for responding to inquiries and service discussions.
          </p>
          <h2>What We Collect</h2>
          <p>Name, email, phone number, company details, and project requirements you submit.</p>
          <h2>How We Use Data</h2>
          <p>To respond to inquiries, evaluate project fit, and improve service delivery.</p>
          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. Data may be processed by trusted service providers used to operate this website.</p>
          <h2>Contact</h2>
          <p>
            For privacy requests, email <a href="mailto:info@tradevastu.com">info@tradevastu.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
