"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Linkedin, Instagram, Facebook, ArrowUpCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  const googleMapsUrl = "https://www.google.com/maps/place/10,+Narhe+Rd,+Wadgaon+Budruk,+Dhayari+Phata,+Pune,+Maharashtra+411041,+India/@18.4551147,73.8195689,19z/data=!3m1!4b1!4m6!3m5!1s0x3bc2953fb13570dd:0xec6e6da05ee45855!8m2!3d18.4551147!4d73.8202126!16s%2Fg%2F11tt5pcy4t?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-white/5 py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-gold-200/5 dark:bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-slate-200/10 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-12 md:mb-20">

          {/* Column 1: Branding & Social */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg">
                <div className="absolute inset-1 sm:inset-1 md:inset-1.5 rounded-xl dark:bg-white/90 dark:shadow-lg transition-all duration-300" />
                <Image
                  src="/logo_tradevastu.png"
                  alt="TRADEVASTU ENTERPRISES Logo"
                  fill
                  className="object-contain relative z-10 p-1 sm:p-1.5 md:p-2"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[16px] md:text-[22px] font-black uppercase tracking-tight text-black dark:text-white">
                  TRADEVASTU
                </span>
                <span className="text-[9px] md:text-[12px] font-bold uppercase tracking-[0.4em] mt-0.5 md:mt-1 text-black dark:text-white opacity-90">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              India&apos;s leading sales infrastructure partner. Scalable solutions tailored for the evolving real estate and MSME landscape.
            </p>

            <div className="flex gap-4 items-center justify-start">
              {[
                { Icon: MessageCircle, href: "https://wa.me/917558516577", label: "WhatsApp" },
                { Icon: Instagram, href: "https://www.instagram.com/tradevastu_enterprises?igsh=MXIyaDg0N2hzdzkzbw==", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/tradevastu-enterprises-404a3a3a3", label: "LinkedIn" },
                { Icon: Facebook, href: "https://www.facebook.com/share/16vNYwcQCT/?mibextid=wwXIfr", label: "Facebook" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[#1E293B] dark:text-blue-400 hover:bg-[#1E293B] hover:text-[#FFD700] dark:hover:bg-[#FFD700] dark:hover:text-[#1E293B] transition-all duration-300 border border-transparent hover:border-[#FFD700]/20"
                  aria-label={social.label}
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-[0.2em]">
              Solutions
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Digital Architecture", href: "/digital-architecture" },
                { name: "Managed Support", href: "/managed-support" },
                { name: "Industry Strategy", href: "/solutions" },
                { name: "Sales Infrastructure", href: "/solutions" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-[0.2em]">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About Our Story", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Support", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-[0.2em]">
              Reach Us
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[13px] font-medium text-gray-900 dark:text-white">Corporate Office</p>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  10, Narhe Rd, Wadgaon Budruk,<br />
                  Dhayari Phata, Pune, Maharashtra 411041
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#FFD700] hover:opacity-80 transition-all"
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:info@tradevastu.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-sm font-bold text-gray-900 dark:text-white hover:border-[#FFD700] hover:bg-white dark:hover:bg-white/10 transition-all group"
                >
                  info@tradevastu.com
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFD700] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 dark:text-gray-500 order-2 md:order-1 text-center md:text-left">
            © 2024 TRADEVASTU ENTERPRISES. <span className="hidden sm:inline">|</span> <span className="text-[#FFD700]">Engineered for ROI.</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1E293B] dark:text-[#FFD700] hover:opacity-70 transition-all order-1 md:order-2 group"
          >
            Back to top
            <ArrowUpCircle className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
