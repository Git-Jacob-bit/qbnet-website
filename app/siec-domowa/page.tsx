"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";

export default function HomeNetwork() {
  // Zastąpiliśmy emoji czystymi komponentami SVG
  const faq = [
    {
      q: "Czy muszę kupować nowy router?",
      a: "Niekoniecznie. W wielu przypadkach wystarczy zmiana ustawień lub dołożenie systemu Mesh. Dobiorę najlepsze rozwiązanie do Twojego mieszkania.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path><path d="M15 8c2.5 0 4.5 2 4.5 4.5"></path><path d="M9 8c-2.5 0-4.5 2-4.5 4.5"></path><path d="M12 4v10"></path></svg> // Router
    },
    {
      q: "Nie znam się na sieciach – czy sobie poradzę?",
      a: "Tak. Wszystko tłumaczę prostym językiem i zostawiam Ci instrukcję na przyszłość. Sieć ma działać bez stresu – nie musisz być specjalistą.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> // Pytanie
    },
    {
      q: "Co to jest Mesh i czy naprawdę działa?",
      a: "Mesh to system, który rozszerza Wi-Fi bez utraty jakości. Działa lepiej niż zwykłe wzmacniacze – testuję go osobiście u klientów.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg> // Wi-Fi
    },
    {
      q: "Czy działa to w domu piętrowym?",
      a: "Tak. Dobieram rozwiązanie pod układ Twojego domu – parter, piętro, ogród, garaż – wszystko da się ogarnąć.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> // Dom
    }
  ];

  return (
    <main className="w-full flex flex-col items-center relative overflow-hidden bg-black pt-24 min-h-screen">
      
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Koniec z <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">martwymi strefami.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Znasz to uczucie, gdy Netflix buforuje w najlepszym momencie, a szef na Teamsach przestaje Cię słyszeć? Buduję sieci, o których istnieniu po prostu zapominasz – bo zawsze działają.
          </p>
        </motion.div>

        {/* BENTO GRID - Czysty i profesjonalny */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          
          {/* Kafelek 1: Duży (Streaming i Gaming) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800/60 transition-all group relative overflow-hidden min-h-[250px] flex flex-col justify-end"
          >
            {/* Delikatny gradient w tle zamiast ikony */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] group-hover:bg-blue-500/10 transition-colors"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-6 group-hover:text-white transition-colors">
              <path d="m2 8 10 5 10-5-10-5z"></path><path d="m2 16 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path>
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Streaming 4K i Gaming</h3>
            <p className="text-neutral-400 max-w-md relative z-10">Niezrównana stabilność dzięki optymalizacji priorytetów ruchu (QoS). Zapomnij o lagu w grach i buforowaniu filmów w najwyższej jakości.</p>
          </motion.div>

          {/* Kafelek 2: Mały (Home Office) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800/60 transition-all group flex flex-col justify-end min-h-[250px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-6 group-hover:text-white transition-colors">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line>
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Home Office</h3>
            <p className="text-neutral-400 text-sm">Płynne wideokonferencje i błyskawiczne przesyłanie dużych plików bez obciążania domowników.</p>
          </motion.div>

          {/* Kafelek 3: Mały (Zabezpieczenia) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800/60 transition-all group flex flex-col justify-end min-h-[250px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mb-6 group-hover:text-white transition-colors">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Bezpieczeństwo</h3>
            <p className="text-neutral-400 text-sm">Nowoczesne szyfrowanie WPA3 i ochrona przed nieautoryzowanym dostępem do Twoich danych.</p>
          </motion.div>

          {/* Kafelek 4: Duży (Mesh) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-neutral-900/80 to-black border border-neutral-800 rounded-3xl p-8 hover:border-neutral-600 transition-all group flex flex-col justify-end min-h-[250px] relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] pointer-events-none"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Inteligentny System Mesh</h3>
            <p className="text-neutral-400 max-w-md relative z-10">Wiele punktów dostępowych pracujących jako jedna sieć. Twoje urządzenia przełączają się automatycznie tam, gdzie sygnał jest najmocniejszy.</p>
          </motion.div>
        </div>

        {/* OŚ CZASU */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak wygląda współpraca?</h2>
            <p className="text-neutral-400">Trzy proste kroki do świętego spokoju.</p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-px bg-neutral-800 md:-translate-x-1/2"></div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.5 }} className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group">
              <div className="hidden md:block w-5/12 text-right pr-12">
                <h3 className="text-2xl font-bold text-white mb-2">1. Diagnoza</h3>
                <p className="text-neutral-400">Przyjeżdżam, mierzę sygnał, znajduję "wąskie gardła" i sprawdzam, dlaczego obecna sieć nie daje rady.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border-4 border-neutral-800 md:-translate-x-1/2 flex items-center justify-center group-hover:border-white transition-colors z-10 text-neutral-400 group-hover:text-white font-bold text-sm">1</div>
              <div className="md:hidden pl-16">
                <h3 className="text-2xl font-bold text-white mb-2">1. Diagnoza</h3>
                <p className="text-neutral-400">Przyjeżdżam, mierzę sygnał, znajduję "wąskie gardła" i sprawdzam, dlaczego obecna sieć nie daje rady.</p>
              </div>
              <div className="hidden md:block w-5/12 pl-12"></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group">
              <div className="hidden md:block w-5/12 pr-12"></div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border-4 border-neutral-800 md:-translate-x-1/2 flex items-center justify-center group-hover:border-white transition-colors z-10 text-neutral-400 group-hover:text-white font-bold text-sm">2</div>
              <div className="md:hidden pl-16">
                <h3 className="text-2xl font-bold text-white mb-2">2. Projekt i sprzęt</h3>
                <p className="text-neutral-400">Proponuję rozwiązanie szyte na miarę (bez przepłacania za niepotrzebne bajery). Wybieram sprzęt, który posłuży latami.</p>
              </div>
              <div className="hidden md:block w-5/12 pl-12 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">2. Projekt i sprzęt</h3>
                <p className="text-neutral-400">Proponuję rozwiązanie szyte na miarę (bez przepłacania za niepotrzebne bajery). Wybieram sprzęt, który posłuży latami.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="hidden md:block w-5/12 text-right pr-12">
                <h3 className="text-2xl font-bold text-white mb-2">3. Montaż</h3>
                <p className="text-neutral-400">Instaluję, konfiguruję i testuję. Zostawiam Cię z potężnym Wi-Fi, czystym domem i instrukcją obsługi w ludzkim języku.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border-4 border-neutral-800 md:-translate-x-1/2 flex items-center justify-center group-hover:border-white transition-colors z-10 text-neutral-400 group-hover:text-white font-bold text-sm">3</div>
              <div className="md:hidden pl-16">
                <h3 className="text-2xl font-bold text-white mb-2">3. Montaż</h3>
                <p className="text-neutral-400">Instaluję, konfiguruję i testuję. Zostawiam Cię z potężnym Wi-Fi, czystym domem i instrukcją obsługi w ludzkim języku.</p>
              </div>
              <div className="hidden md:block w-5/12 pl-12"></div>
            </motion.div>
          </div>
        </div>

        <Portfolio 
        heading="Realizacje: Sieci Domowe"
        subheading="Przykłady problemów, które rozwiązałem u klientów we Wrocławiu."
        projects={[
          {
            title: "Trzypoziomowy dom (Ołtaszyn)",
            problem: "Grube zbrojone stropy całkowicie blokowały sygnał z parteru. Na piętrze brak internetu, w piwnicy (gdzie była siłownia) brak możliwości włączenia Spotify.",
            solution: "Wykorzystanie istniejącego okablowania do montażu 3 sufitowych punktów Access Point (Wi-Fi 6). Skonfigurowano płynny roaming – telefony domowników nie gubią zasięgu podczas chodzenia po schodach."
          },
          {
            title: "Mieszkanie w starym budownictwie (Śródmieście)",
            problem: "Ogromne zagęszczenie sieci sąsiadów (ponad 30 widocznych sieci Wi-Fi). Ciągłe zrywanie połączeń podczas pracy zdalnej i wysoki ping w grach.",
            solution: "Analiza spektrum radiowego i ręczny dobór najmniej obciążonych kanałów. Przeniesienie głównego sprzętu na pasmo 5GHz oraz poprowadzenie dyskretnego kabla LAN do komputera stacjonarnego."
          }
        ]} 
      />

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

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center bg-neutral-900/40 border border-neutral-800 p-12 rounded-3xl relative overflow-hidden group">
          
          {/* Tutaj podmieniliśmy via-neutral-800/20 na via-blue-500/15 */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/0 via-blue-500/15 to-neutral-800/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Masz problem z siecią?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto relative z-10">Nie trać nerwów na restartowanie routera. Zadzwoń lub napisz, a dobierzemy sprzęt, który po prostu działa.</p>
          
          <Link href="/#kontakt" className="relative z-10 inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
            Umów darmowy audyt
          </Link>
        </motion.div>

      </div>
    </main>
  );
}