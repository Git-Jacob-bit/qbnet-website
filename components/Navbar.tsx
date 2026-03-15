"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Stan przechowujący informację, czy menu mobilne jest otwarte
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Pobieramy aktualny adres strony (np. "/" lub "/strony-www")

  // Funkcja zamykająca menu po kliknięciu w link
  const closeMenu = () => setIsOpen(false);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Sprawdzamy: Czy użytkownik JEST na stronie głównej?
    if (pathname === "/") {
      e.preventDefault(); // Blokujemy przeładowanie
      const contactSection = document.getElementById("kontakt");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "/#kontakt"); 
      }
    }
    // UWAGA: Jeśli NIE jest na stronie głównej, funkcja nic nie zablokuje,
    // a link <Link href="/#kontakt"> zadziała całkowicie normalnie!
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-wider">
          qb-net<span className="text-neutral-500">.</span>
        </Link>

        {/* Linki - widoczne tylko na komputerach (md) */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Start</Link>
          <Link href="/siec-domowa" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Sieć domowa</Link>
          <Link href="/smart-home" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Smart Home</Link>
          <Link href="/strony-www" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Strony internetowe</Link>
          <Link href="/#kontakt" onClick={handleScrollToContact} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Kontakt</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Guzik Zadzwoń - widoczny tylko na komputerach */}
          <a href="tel:+48732040365" className="hidden md:block px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors">
            Zadzwoń
          </a>

          {/* Przycisk Hamburgera - widoczny tylko na telefonach (< md) */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Rozwijane menu mobilne - obsługiwane przez AnimatePresence z Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-6 text-center">
              <Link href="/" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white">Start</Link>
              <Link href="/siec-domowa" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white">Sieć domowa</Link>
              <Link href="/smart-home" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Smart Home</Link>
              <Link href="/strony-www" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Strony internetowe</Link>
              <Link href="/#kontakt" onClick={closeMenu} className="text-lg font-medium text-neutral-300 hover:text-white">Kontakt</Link>
              
              <a href="tel:+48732040365" className="mt-2 px-4 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                Zadzwoń: +48 732 040 365
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}