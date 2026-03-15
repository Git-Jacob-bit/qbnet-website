"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";

export default function SmartHome() {
  const faq = [
    {
      q: "Czy muszę kuć ściany, żeby założyć Smart Home?",
      a: "Absolutnie nie! Stosuję nowoczesne moduły dopuszkowe (np. Zigbee), które chowam za Twoimi obecnymi włącznikami światła. Zero kucia, zero kurzu.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      q: "Co się stanie, gdy zabraknie internetu?",
      a: "Większość systemów, które projektuję (np. oparte na Home Assistant), działa LOKALNIE. Oznacza to, że nawet jeśli operator odetnie Ci internet, Twoje światła i rolety nadal będą działać automatycznie.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><line x1="2" y1="2" x2="22" y2="22"></line><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><path d="M12 20h.01"></path></svg>
    },
    {
      q: "Mam już kilka żarówek z IKEA i Xiaomi. Da się to połączyć?",
      a: "Tak! To moja specjalność. Integruję sprzęt różnych producentów w jedną, spójną aplikację, żebyś nie musiał skakać między kilkoma programami w telefonie.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path><path d="M15 8c2.5 0 4.5 2 4.5 4.5"></path><path d="M9 8c-2.5 0-4.5 2-4.5 4.5"></path><path d="M12 4v10"></path></svg>
    },
    {
      q: "Czy mogę sterować domem głosem?",
      a: "Oczywiście. System możemy spiąć z asystentami takimi jak Siri (Apple HomeKit), Google Assistant czy Amazon Alexa. Wystarczy powiedzieć 'Dobranoc', aby zgasić cały dom.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
    }
  ];

  return (
    <main className="w-full flex flex-col items-center relative overflow-hidden bg-black pt-24 min-h-screen">
      
      {/* Tło (delikatny gradient, tutaj zmieniony na lekko zielono/niebieski, żeby odróżnić od sieci) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 py-16 w-full">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-12">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Powrót na stronę główną
          </Link>
        </motion.div>

        {/* HERO PODSTRONY */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Twój dom. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Twoje zasady.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Zapomnij o dziesięciu różnych aplikacjach do żarówek, rolet i ogrzewania. Zbuduję dla Ciebie jeden, płynnie działający system, który po prostu ułatwia życie i oszczędza prąd.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          
          {/* Kafelek 1: Duży (Jeden system) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }} className="md:col-span-2 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800/60 transition-all group relative overflow-hidden min-h-[250px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] group-hover:bg-emerald-500/10 transition-colors"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-6 group-hover:text-white transition-colors">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Wszystko w jednej aplikacji</h3>
            <p className="text-neutral-400 max-w-md relative z-10">Koniec z szukaniem pilota. Steruj oświetleniem, roletami, bramą i ogrzewaniem z poziomu jednej aplikacji (np. Apple HomeKit) na Twoim telefonie.</p>
          </motion.div>

          {/* Kafelek 2: Mały (Oszczędność) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-1 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800/60 transition-all group flex flex-col justify-end min-h-[250px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-6 group-hover:text-white transition-colors">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Mniejsze rachunki</h3>
            <p className="text-neutral-400 text-sm">Inteligentne głowice automatycznie skręcą grzejniki, gdy otworzysz okno. Światło zgaśnie samo, gdy wyjdziesz z pokoju.</p>
          </motion.div>

          {/* Kafelek 3: Mały (Automatyzacje) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }} className="md:col-span-1 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800/60 transition-all group flex flex-col justify-end min-h-[250px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-6 group-hover:text-white transition-colors">
              <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Automatyzacje</h3>
            <p className="text-neutral-400 text-sm">Scena "Kino"? Rolety w dół, światło na 20%, włącza się TV. Wszystko dzieje się samo w tle.</p>
          </motion.div>

          {/* Kafelek 4: Duży (Bez kucia) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }} className="md:col-span-2 bg-gradient-to-br from-neutral-900/80 to-black border border-neutral-800 rounded-3xl p-8 hover:border-neutral-600 transition-all group flex flex-col justify-end min-h-[250px] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] pointer-events-none"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Bez kucia ścian i remontu</h3>
            <p className="text-neutral-400 max-w-md relative z-10">Nie musisz robić generalnego remontu, żeby mieć Smart Home. Wykorzystuję bezprzewodowe protokoły (Zigbee, Thread), które integrują się z Twoją obecną instalacją elektryczną.</p>
          </motion.div>
        </div>

        {/* OŚ CZASU */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak budujemy Twój system?</h2>
            <p className="text-neutral-400">Od pomysłu do inteligentnego domu w 3 krokach.</p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-px bg-neutral-800 md:-translate-x-1/2"></div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.5 }} className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group">
              <div className="hidden md:block w-5/12 text-right pr-12">
                <h3 className="text-2xl font-bold text-white mb-2">1. Wizja i potrzeby</h3>
                <p className="text-neutral-400">Rozmawiamy o tym, co Cię denerwuje i co chcesz zautomatyzować. Oświetlenie, ogrzewanie, a może monitoring? Zbieram wymagania.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border-4 border-neutral-800 md:-translate-x-1/2 flex items-center justify-center group-hover:border-white transition-colors z-10 text-neutral-400 group-hover:text-white font-bold text-sm">1</div>
              <div className="md:hidden pl-16">
                <h3 className="text-2xl font-bold text-white mb-2">1. Wizja i potrzeby</h3>
                <p className="text-neutral-400">Rozmawiamy o tym, co Cię denerwuje i co chcesz zautomatyzować. Oświetlenie, ogrzewanie, a może monitoring? Zbieram wymagania.</p>
              </div>
              <div className="hidden md:block w-5/12 pl-12"></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group">
              <div className="hidden md:block w-5/12 pr-12"></div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border-4 border-neutral-800 md:-translate-x-1/2 flex items-center justify-center group-hover:border-white transition-colors z-10 text-neutral-400 group-hover:text-white font-bold text-sm">2</div>
              <div className="md:hidden pl-16">
                <h3 className="text-2xl font-bold text-white mb-2">2. Dobór ekosystemu</h3>
                <p className="text-neutral-400">Wybieram odpowiednie moduły, bramki i czujniki. Upewniam się, że wszystko będzie komunikować się niezawodnie i bez opóźnień.</p>
              </div>
              <div className="hidden md:block w-5/12 pl-12 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">2. Dobór ekosystemu</h3>
                <p className="text-neutral-400">Wybieram odpowiednie moduły, bramki i czujniki. Upewniam się, że wszystko będzie komunikować się niezawodnie i bez opóźnień.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-5/12 text-right pr-12">
                <h3 className="text-2xl font-bold text-white mb-2">3. Wdrożenie</h3>
                <p className="text-neutral-400">Instaluję urządzenia ukryte w puszkach elektrycznych, paruję je z centralą i programuję logikę (np. "Gdy wyjdę, zgaś światło"). Wszystko w jednej apce.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border-4 border-neutral-800 md:-translate-x-1/2 flex items-center justify-center group-hover:border-white transition-colors z-10 text-neutral-400 group-hover:text-white font-bold text-sm">3</div>
              <div className="md:hidden pl-16">
                <h3 className="text-2xl font-bold text-white mb-2">3. Wdrożenie</h3>
                <p className="text-neutral-400">Instaluję urządzenia ukryte w puszkach elektrycznych, paruję je z centralą i programuję logikę (np. "Gdy wyjdę, zgaś światło"). Wszystko w jednej apce.</p>
              </div>
              <div className="hidden md:block w-5/12 pl-12"></div>
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Najczęściej zadawane pytania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-neutral-900/20 border border-neutral-800/50 p-6 rounded-2xl flex flex-col">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Portfolio 
        heading="Realizacje: Smart Home"
        subheading="Automatyzacje, które ułatwiają codzienne życie."
        projects={[
          {
            title: "Sterowanie roletami i światłem bez kucia ścian",
            problem: "Klient chciał zamknąć wszystkie rolety w domu jednym przyciskiem przy wyjściu, ale dom był już wykończony. Nie chciał kuć ścian pod nowe kable.",
            solution: "Montaż miniaturowych modułów dopuszkowych Zigbee pod istniejącymi włącznikami. Całość zintegrowana z Apple HomeKit. Działa bez opóźnień i pozwala na tworzenie harmonogramów (np. rolety zamykają się po zachodzie słońca)."
          },
          {
            title: "Zintegrowane ogrzewanie strefowe",
            problem: "Koszty ogrzewania gazowego drastycznie rosły, a w nieużywanych pokojach na piętrze było niepotrzebnie gorąco.",
            solution: "Instalacja inteligentnych głowic termostatycznych na kaloryferach. Utworzenie stref – system grzeje w sypialni tylko w nocy, a w salonie tylko w dzień. Zdalny dostęp z telefonu z każdego miejsca na świecie."
          }
        ]} 
      />

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center bg-neutral-900/40 border border-neutral-800 p-12 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/0 via-neutral-800/20 to-neutral-800/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Gotowy na inteligentny dom?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto relative z-10">Zacznijmy od małych kroków lub zaprojektujmy cały system. Zadzwoń lub napisz i powiedz, czego potrzebujesz.</p>
          <Link href="/#kontakt" className="relative z-10 inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
            Darmowa wycena
          </Link>
        </motion.div>

      </div>
    </main>
  );
}