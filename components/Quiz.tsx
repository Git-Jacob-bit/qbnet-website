"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    type: "",
    size: "",
    problem: "",
  });

  const handleAnswer = (field: keyof typeof answers, value: string) => {
    setAnswers({ ...answers, [field]: value });
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({ type: "", size: "", problem: "" });
  };

  const getResult = () => {
    if (answers.problem === "Smart Home") {
      return "Dla Twojego metrażu świetnie sprawdzi się centrala Smart Home (np. Home Assistant) z siecią opartą na protokole Zigbee. Pozwoli to na sterowanie oświetleniem i roletami bez kucia ścian i obciążania routera.";
    }
    if (answers.size === "Duży dom (powyżej 100m² lub piętro)") {
      return "Twój metraż i układ wymusza zastosowanie systemu Mesh składającego się z minimum 3 punktów dostępowych (Access Points). Jeden router, choćby najdroższy, nie przebije się przez stropy. Połączymy je tak, byś chodził po domu i zawsze miał pełny zasięg.";
    }
    if (answers.type === "Mieszkanie" && answers.size !== "Duży dom (powyżej 100m² lub piętro)") {
      return "Dla tego metrażu wystarczy najprawdopodobniej optymalizacja obecnej sieci, zmiana kanałów (żeby sąsiedzi Cię nie zagłuszali) lub dołożenie jednego dyskretnego Access Pointa, jeśli zależy Ci na niskim pingu do gier.";
    }
    return "Potrzebujemy dobrej bazy. Zaproponuję Ci stabilny system Mesh (2-3 urządzenia) dopasowany do grubości Twoich ścian. Skończą się problemy z buforowaniem wideo w sypialni.";
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/#kontakt"); 
    }
  };

  return (
    <section className="w-full py-24 px-4 bg-black relative overflow-hidden z-10 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Sprawdź, czego <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">potrzebujesz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            Odpowiedz na 3 szybkie pytania i odbierz darmową, wstępną diagnozę swojej domowej sieci.
          </motion.p>
        </div>

        {/* Kontener Quizu - Czysty, ciemny z eleganckim obramowaniem */}
        <div className="bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-8 md:p-14 min-h-[420px] relative overflow-hidden flex flex-col justify-center shadow-2xl">
          
          <AnimatePresence mode="wait">
            
            {/* KROK 1 */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="w-full">
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block text-center">Krok 1 z 3</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Gdzie mieszkasz?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  
                  <button onClick={() => handleAnswer("type", "Mieszkanie")} className="p-8 bg-black/50 border border-neutral-800 rounded-2xl hover:border-neutral-500 hover:bg-neutral-800/50 transition-all text-white font-semibold flex flex-col items-center gap-5 group">
                    <svg className="w-12 h-12 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
                    </svg>
                    <span className="text-lg">Mieszkanie</span>
                  </button>

                  <button onClick={() => handleAnswer("type", "Dom")} className="p-8 bg-black/50 border border-neutral-800 rounded-2xl hover:border-neutral-500 hover:bg-neutral-800/50 transition-all text-white font-semibold flex flex-col items-center gap-5 group">
                    <svg className="w-12 h-12 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-lg">Dom jednorodzinny</span>
                  </button>

                </div>
              </motion.div>
            )}

            {/* KROK 2 */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="w-full">
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block text-center">Krok 2 z 3</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Jaka to powierzchnia?</h3>
                <div className="flex flex-col gap-4 max-w-xl mx-auto">
                  
                  {["Małe (do 60m²)", "Średnie (60-100m²)", "Duży dom (powyżej 100m² lub piętro)"].map((sizeStr, idx) => (
                    <button key={idx} onClick={() => handleAnswer("size", sizeStr)} className="w-full p-5 bg-black/50 border border-neutral-800 rounded-2xl hover:border-neutral-500 hover:bg-neutral-800/50 transition-all text-white font-medium text-left px-8 flex items-center justify-between group">
                      <span>{sizeStr === "Małe (do 60m²)" ? "Do 60 m² (jednopoziomowe)" : sizeStr === "Średnie (60-100m²)" ? "60 - 100 m²" : "Powyżej 100 m² (lub piętrowe)"}</span>
                      <svg className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}

                </div>
              </motion.div>
            )}

            {/* KROK 3 */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="w-full">
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block text-center">Krok 3 z 3</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Co jest Twoim największym problemem?</h3>
                <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                  
                  <button onClick={() => handleAnswer("problem", "Martwe strefy")} className="w-full p-6 bg-black/50 border border-neutral-800 rounded-2xl hover:border-neutral-500 hover:bg-neutral-800/50 transition-all text-white font-medium text-left px-8 flex items-center gap-6 group">
                    <svg className="w-8 h-8 text-neutral-400 group-hover:text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" />
                    </svg>
                    <span className="text-lg">W niektórych pokojach nie ma w ogóle zasięgu</span>
                  </button>

                  <button onClick={() => handleAnswer("problem", "Niestabilność")} className="w-full p-6 bg-black/50 border border-neutral-800 rounded-2xl hover:border-neutral-500 hover:bg-neutral-800/50 transition-all text-white font-medium text-left px-8 flex items-center gap-6 group">
                    <svg className="w-8 h-8 text-neutral-400 group-hover:text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg">Zasięg jest, ale internet rwie (np. zacina wideo i gry)</span>
                  </button>

                  <button onClick={() => handleAnswer("problem", "Smart Home")} className="w-full p-6 bg-black/50 border border-neutral-800 rounded-2xl hover:border-neutral-500 hover:bg-neutral-800/50 transition-all text-white font-medium text-left px-8 flex items-center gap-6 group">
                    <svg className="w-8 h-8 text-neutral-400 group-hover:text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-lg">Chcę zautomatyzować dom (Smart Home)</span>
                  </button>

                </div>
              </motion.div>
            )}

            {/* WYNIK */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full text-center py-4">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Wstępna diagnoza dla Ciebie:</h3>
                <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed border border-neutral-800 bg-black/50 p-6 md:p-8 rounded-2xl">
                  {getResult()}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#kontakt" onClick={handleScrollToContact} className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg">
                    Napisz do mnie i umów wycenę
                  </Link>
                  <button onClick={resetQuiz} className="px-8 py-4 rounded-full bg-black text-white font-semibold border border-neutral-700 hover:bg-neutral-900 transition-colors">
                    Rozwiąż jeszcze raz
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Minimalistyczny, biały pasek postępu (nawiązanie do loadera) */}
          {step < 3 && (
            <div className="absolute bottom-0 left-0 h-[2px] bg-neutral-900 w-full">
              <motion.div 
                className="h-full bg-white" 
                initial={{ width: 0 }}
                animate={{ width: `${((step) / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}