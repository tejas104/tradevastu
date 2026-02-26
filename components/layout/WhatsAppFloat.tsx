"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, PhoneCall } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917558516577";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  if (isContactPage) {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-600"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
    );
  }

  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 rounded-full bg-[#1E293B] px-4 py-3 text-white shadow-xl transition-all hover:scale-105 hover:bg-[#2c3e5a]"
    >
      <PhoneCall className="h-5 w-5" />
      <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Contact</span>
    </Link>
  );
}
