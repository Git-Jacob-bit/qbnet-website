"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Contact from "@/components/Contact"; // <-- Przywracamy nasz działający formularz!
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Quiz from "@/components/Quiz";

export default function Home() {
  // Nasza lista usług z profesjonalnymi ikonkami
  const services = [
    {
      title: "Sieć Domowa i Wi-Fi",
      desc: "Koniec z martwymi strefami i zacinającym się wideo. Szybki, stabilny internet w każdym kącie domu.",
      link: "/siec-domowa",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-white transition-colors"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
    },
    {
      title: "Smart Home",
      desc: "Zarządzaj oświetleniem, roletami i ogrzewaniem z jednej aplikacji. Bez kucia ścian, bez bałaganu.",
      link: "/smart-home",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-white transition-colors"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    },
    {
      title: "Strony Internetowe WWW",
      desc: "Nowoczesne, ultra-szybkie i responsywne strony wizytówkowe oraz Landing Page, które przyciągają klientów.",
      link: "/strony-www",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-white transition-colors"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    }
  ];

  // Funkcja wymuszająca płynne przewijanie do kontaktu
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Blokujemy domyślne zachowanie linku
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Aktualizujemy pasek adresu, żeby wszystko wyglądało ładnie
      window.history.pushState(null, "", "/#kontakt"); 
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      
      {/* SEKCJA HERO */}
      <section className="w-full relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none -z-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8"
          >
            Twój dom,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">wreszcie połączony.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Projektuję i konfiguruję niezawodne sieci domowe oraz systemy Smart Home we Wrocławiu. Koniec z frustracją – ciesz się technologią, która po prostu działa.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/siec-domowa" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
              Zobacz ofertę
            </Link>
            <Link href="/#kontakt" onClick={handleScrollToContact} className="px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold border border-neutral-800 hover:bg-neutral-800 transition-colors">
              Darmowa wycena
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEKCJA USŁUG */}
      <section className="w-full py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">W czym mogę Ci pomóc?</h2>
            <p className="text-neutral-400">Wybierz obszar, który wymaga ulepszenia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="block group bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:bg-neutral-800/60 transition-all h-full">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />

      <Pricing />

      {/* Tutaj podajemy dane specjalnie dla Strony Głównej (Mix projektów) */}
      <Portfolio 
        heading="Ostatnie realizacje"
        subheading="Od szybkich stron internetowych po domowe serwerownie."
        projects={[
          {
            title: "Strona dla lokalnej kawiarni",
            problem: "Stara strona nie ładowała się na telefonach, brak menu i formularza rezerwacji. Klienci dzwonili, zamiast rezerwować online.",
            solution: "Nowoczesna strona w Next.js. Czas ładowania poniżej 1 sekundy. Zintegrowany system rezerwacji stolików odciążył obsługę."
          },
          {
            title: "Sieć w domu jednorodzinnym",
            problem: "Jeden router od operatora w szafie rozdzielczej. Całkowity brak internetu na piętrze i na tarasie. Zrywające połączenia wideo.",
            solution: "Montaż 3 punktów dostępowych w standardzie Wi-Fi 6 (system Mesh). Płynne przełączanie między piętrami bez utraty zasięgu."
          }
        ]} 
      />

      <Quiz />

      {/* SEKCJA KONTAKT (Załadowana z naszego sprawdzonego komponentu) */}
      <Contact />

    </main>
  );
}