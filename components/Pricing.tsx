"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Poprawa obecnego Wi-Fi",
      price: "Od 299 zł",
      desc: "Idealne do małych mieszkań. Wyciskamy maksimum z tego, co już masz.",
      features: [
        "Dojazd i diagnoza problemu",
        "Zmiana kanałów i optymalizacja routera",
        "Aktualizacja oprogramowania",
        "Opcjonalne dołożenie Access Pointa",
      ],
      highlighted: false,
    },
    {
      name: "System Mesh (Dom/Duże Mieszkanie)",
      price: "Od 599 zł",
      suffix: "+ koszt sprzętu",
      desc: "Kompleksowe rozwiązanie eliminujące martwe strefy na zawsze.",
      features: [
        "Dobór odpowiednich urządzeń Mesh",
        "Montaż i konfiguracja całej sieci",
        "Optymalizacja pod Home Office i Gaming",
        "Płynne przełączanie (Roaming)",
        "Gwarancja 100% pokrycia sygnałem",
      ],
      highlighted: true, // Ta karta jest podświetlona jako najpopularniejsza
    },
    {
      name: "Smart Home",
      price: "Wycena indywidualna",
      desc: "Inteligentny dom dopasowany do Twojego budżetu i potrzeb.",
      features: [
        "Darmowy audyt u klienta",
        "Projekt systemu bez kucia ścian",
        "Dobór ekosystemu (Apple Home / Zigbee)",
        "Montaż modułów dopuszkowych",
        "Programowanie automatyzacji",
      ],
      highlighted: false,
    },
    // NOWA KARTA: Strony WWW i Aplikacje
    {
      name: "Strony WWW i Aplikacje",
      price: "Od 999 zł",
      suffix: "za stronę wizytówkową",
      desc: "Ultraszybkie strony i systemy szyte na miarę w nowoczesnych technologiach.",
      features: [
        "Indywidualny, nowoczesny design",
        "Błyskawiczne ładowanie (Next.js)",
        "Pełna responsywność na telefony",
        "Podstawowa optymalizacja SEO",
        "Integracja z systemami zewnętrznymi",
      ],
      highlighted: false,
    }
  ];

  return (
    <section className="w-full py-24 px-4 border-t border-neutral-900 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Ile kosztuje <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">profesjonalizm?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Przejrzyste zasady, brak ukrytych kosztów. Płacisz za rozwiązanie problemu, wydajność i gwarancję działania.
          </motion.p>
        </div>

        {/* Zmieniliśmy siatkę z md:grid-cols-3 na md:grid-cols-2 żeby 4 karty utworzyły równy kwadrat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col h-full p-8 rounded-3xl border ${
                plan.highlighted 
                ? "bg-gradient-to-b from-neutral-900 to-black border-blue-500/50 shadow-2xl shadow-blue-500/10 md:-translate-y-2" 
                : "bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 transition-colors"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Najczęściej wybierane
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                {plan.suffix && <span className="block text-sm text-neutral-500 mt-1">{plan.suffix}</span>}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span className="text-neutral-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Dodana funkcja onClick dla płynnego przewijania do kontaktu */}
              <Link 
                href="/#kontakt"
                onClick={(e) => {
                  const contactSection = document.getElementById("kontakt");
                  if (contactSection) {
                    e.preventDefault();
                    contactSection.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#kontakt");
                  }
                }}
                className={`w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.highlighted 
                  ? "bg-white text-black hover:bg-neutral-200 shadow-lg shadow-white/10" 
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                Zapytaj o wycenę
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}