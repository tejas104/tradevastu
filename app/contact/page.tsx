import Header from "@/components/layout/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Contact | TRADEVASTU ENTERPRISES",
    description: "Initiate a strategic conversation with TRADEVASTU ENTERPRISES.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <ContactHero />
            <ContactForm />
            <ContactMap />
            <ContactFAQ />
            <ContactCTA />
            <Footer />
        </main>
    );
}

