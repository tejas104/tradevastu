"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function Header() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: ["Solutions"], href: "/solutions" },
    { name: ["Managed", "Support"], href: "/managed-support" },
    { name: ["About"], href: "/about" },
    { name: ["Digital", "Architecture"], href: "/digital-architecture" },
    { name: ["Contact"], href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all  duration-300 ${scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm py-2"
          : "bg-white dark:bg-slate-900 py-4"
          } border-b border-gray-100 dark:border-slate-800`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-16 md:h-20"}`}>

            {/* LEFT — BRANDING */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg">

                {/* Light surface only in dark mode */}
                <div className="
                  absolute inset-1 sm:inset-1 md:inset-1.5
                  rounded-xl
                  dark:bg-white/90
  dark:shadow-lg

                  transition-all duration-300
                " />

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

            {/* RIGHT SIDE GROUP */}
            <div className="hidden xl:flex items-center ml-auto">

              {/* NAV LINKS */}
              <nav className="flex items-center space-x-6 mr-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative flex flex-col items-center justify-center py-1 leading-tight transition-colors ${link.href === "/digital-architecture" ? "ml-4" : ""
                      } ${pathname === link.href
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                  >
                    {link.name.map((line, index) => (
                      <span
                        key={index}
                        className="font-bold uppercase text-[11px] tracking-widest"
                      >
                        {line}
                      </span>
                    ))}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#FFD700] transition-all duration-300 ${pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                ))}
              </nav>

              {/* MOON BUTTON */}
              <div className="mr-8">
                <ThemeToggle />
              </div>

              {/* CTA BUTTON */}
              <button
                onClick={() => setModalOpen(true)}
                className="
                  bg-[#1E293B] 
                  dark:bg-[#FFD700] 
                  text-white 
                  dark:text-[#1E293B] 
                  px-6 
                  py-2.5 
                  rounded-md 
                  font-bold 
                  uppercase 
                  text-xs 
                  tracking-widest 
                  hover:bg-[#2c3e5a] 
                  dark:hover:bg-[#FFD700]/90 
                  transition-all
                "
              >
                Book Industry Strategy Call
              </button>
            </div>

            {/* MOBILE */}
            <div className="flex xl:hidden items-center ml-auto space-x-2 md:space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 md:p-2 text-gray-700 dark:text-gray-300"
              >
                {mobileMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`xl:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen
            ? "scale-y-100 opacity-100 visible py-6"
            : "scale-y-0 opacity-0 invisible h-0"
            } px-4 space-y-4 shadow-xl`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg transition-all font-bold uppercase text-[12px] tracking-widest ${pathname === link.href
                ? "bg-gray-50 dark:bg-slate-800 text-[#EAB308]"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
            >
              {link.name.join(" ")}
            </Link>
          ))}

          <div className="pt-4">
            <button
              onClick={() => {
                setModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] px-6 py-4 rounded-lg font-bold uppercase text-xs tracking-widest transition-all"
            >
              Book Industry Strategy Call
            </button>
          </div>
        </div>
      </header>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="header-nav-cta"
        title="Industry Strategy Call"
        subtitle="Schedule a session to optimize your technology infrastructure."
      />
    </>
  );
}
