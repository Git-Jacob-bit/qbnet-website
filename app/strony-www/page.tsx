"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function StronyWWW() {
  // Stan do śledzenia, która technologia jest obecnie rozwinięta
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const webServices = [
    {
      title: "Strony Wizytówkowe (Next.js)",
      desc: "Ultraszybkie, nowoczesne strony dla firm. Zoptymalizowane pod Google (SEO), ładujące się w ułamku sekundy. Idealne do pozyskiwania klientów.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-purple-400 transition-colors"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    },
    {
      title: "Zaawansowane Aplikacje Webowe",
      desc: "Platformy e-learningowe, portale dla klientów, systemy rezerwacji. Pełny Full-Stack z bezpiecznymi bazami danych i wydajnym backendem.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-purple-400 transition-colors"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    },
    {
      title: "Systemy Wewnętrzne (B2B)",
      desc: "Panele administracyjne, systemy zarządzania flotą/sprzętem, integracje przez API, komunikacja w czasie rzeczywistym (WebSockets).",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-purple-400 transition-colors"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
    }
  ];

  // Rozbudowany stack technologiczny o opisy
  const techStack = [
    { name: "React.js", desc: "Biblioteka UI od Meta. Serce moich interaktywnych, dynamicznych interfejsów użytkownika." },
    { name: "Next.js", desc: "Framework pozwalający na generowanie statycznych stron (SSG) i renderowanie po stronie serwera (SSR) dla maksymalnej wydajności i SEO." },
    { name: "TypeScript", desc: "Silnie typowany JavaScript. Gwarantuje bezpieczeństwo, przewidywalność i mniejszą liczbę błędów w kodzie." },
    { name: "Python (FastAPI)", desc: "Błyskawiczny framework do budowy backendu i API. Idealny do asynchronicznych operacji i ciężkiej logiki biznesowej." },
    { name: "Golang", desc: "Kompilowany język od Google. Wykorzystuję go do tworzenia niesamowicie wydajnych agentów systemowych i mikroserwisów." },
    { name: "PostgreSQL", desc: "Potężna, niezawodna relacyjna baza danych. Bezpieczne miejsce na dane Twojej firmy." },
    { name: "WebSockets", desc: "Technologia pozwalająca na dwukierunkową komunikację w czasie rzeczywistym (np. na żywo odświeżające się panele)." },
    { name: "TailwindCSS", desc: "Nowoczesne stylowanie aplikacji z poziomu kodu, pozwalające na tworzenie unikalnych i mrocznych designów (jak ta strona)." }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black pt-24 relative overflow-hidden">

      {/* Tło */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] pointer-events-none -z-10"></div>

      {/* NAGŁÓWEK PODSTRONY */}
      <section className="w-full py-16 px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Aplikacje Webowe i <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">Strony WWW</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
          >
            Od lekkich, błyskawicznych wizytówek po skomplikowane systemy zarządzania infrastrukturą IT. Zamieniam Twoje pomysły w niezawodny kod.
          </motion.p>
        </div>
      </section>

      {/* KAFELKI - CO TWORZYSZ */}
      <section className="w-full py-12 px-4 z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {webServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-purple-500/50 transition-colors group"
            >
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERAKTYWNY STACK TECHNOLOGICZNY */}
      <section className="w-full py-16 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-8">Mój warsztat technologiczny (kliknij, aby rozwinąć)</p>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => {
              const isExpanded = expandedTech === tech.name;

              return (
                <motion.div
                  layout // To sprawia, że reszta elementów płynnie się rozsuwa
                  key={tech.name}
                  onClick={() => setExpandedTech(isExpanded ? null : tech.name)}
                  className={`cursor-pointer overflow-hidden rounded-2xl border transition-colors duration-300 ${isExpanded
                      ? "bg-neutral-900 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                      : "bg-black border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/50"
                    }`}
                >
                  <motion.div layout className="px-6 py-3 font-medium text-white flex items-center gap-2">
                    {tech.name}
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className={`w-4 h-4 transition-colors ${isExpanded ? "text-purple-400" : "text-neutral-500"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-4 text-sm text-neutral-400 max-w-[280px] text-left"
                      >
                        {tech.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO Z TWOIMI PROJEKTAMI */}
      <Portfolio
        heading="Wybrane realizacje"
        subheading="Przykłady aplikacji i systemów, które zaprojektowałem i wdrożyłem od zera."
        projects={[
          {
            title: "System zarządzania komputerami i serwerami w sieci (IT Admin Tool)",
            problem: "Administratorzy potrzebowali lekkiego narzędzia do monitorowania zasobów zdalnych maszyn w czasie rzeczywistym, bez kupowania drogich, ociężałych licencji korporacyjnych.",
            solution: "Stworzyłem system Full-Stack. Na maszynach zdalnych działa lekki agent napisany w Golang. Przesyła on dane na żywo przez WebSockets do serwera FastAPI. Całość jest monitorowana z poziomu responsywnego panelu napisanego w React.js."
          },
          {
            title: "Interaktywna platforma do nauki (E-learning)",
            problem: "Gotowe platformy typu Moodle były zbyt skomplikowane i wizualnie przestarzałe dla nowoczesnych kursantów. Brakowało płynności działania.",
            solution: "Zaprojektowałem i zakodowałem autorską platformę edukacyjną. Backend oparty na Pythonie (FastAPI) i bazie PostgreSQL zapewnia bezpieczeństwo danych, a interfejs w React.js gwarantuje błyskawiczne przejścia między lekcjami bez przeładowywania strony."
          },
          {
            title: "Nowoczesne strony wizerunkowe (Next.js)",
            problem: "Klienci tracili ruch z Google przez wolno ładujące się strony na WordPressie, które nie działały poprawnie na urządzeniach mobilnych.",
            solution: "Wdrażam statycznie generowane strony (SSG) z użyciem frameworka Next.js i TailwindCSS (np. ta strona, na której jesteś). Wynik? Ładowanie w mniej niż sekundę, idealne wyniki w Google PageSpeed i zero podatności na ataki hackerskie."
          }
        ]}
      />

      {/* CTA - Strony WWW */}
      <section className="w-full py-16 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center bg-neutral-900/40 border border-neutral-800 p-12 rounded-3xl relative overflow-hidden group">
            {/* Tutaj zmieniłem środkowy kolor na subtelny fiolet, żeby pasował do reszty tej podstrony */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/0 via-purple-500/10 to-neutral-800/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Gotowy na nową stronę lub aplikację?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto relative z-10">
              Napisz do mnie. Przeanalizuję Twój pomysł i zaproponuję najszybsze oraz najbardziej optymalne rozwiązanie technologiczne.
            </p>

            <Link href="/#kontakt" className="relative z-10 inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
              Darmowa wycena projektu
            </Link>
          </motion.div>
        </div>
      </section>



    </main>
  );
}