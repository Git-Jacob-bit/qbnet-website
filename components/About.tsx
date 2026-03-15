"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full py-24 px-4 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      
      {/* Delikatny blask w tle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Lewa strona - Zdjęcie (Placeholder) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 relative"
        >
          {/* Ramka ze zdjęciem */}
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 group">
            {/* Ten div poniżej docelowo podmienisz na tag <img src="/twoje-zdjecie.jpg" /> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600 group-hover:text-neutral-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span className="text-sm font-medium">Twoje zdjęcie (kliknij by podmienić w kodzie)</span>
            </div>
            
            {/* Ozdobny gradient na dole zdjęcia */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Plakietka "Lokalnie" */}
          <div className="absolute -bottom-6 -right-6 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Wrocław i okolice</p>
              <p className="text-neutral-400 text-xs">Szybki dojazd do klienta</p>
            </div>
          </div>
        </motion.div>

        {/* Prawa strona - Tekst */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-7/12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Kto połączy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Twój dom?</span>
          </h2>
          
          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
            <p>
              Cześć, jestem <span className="text-white font-semibold">Kuba</span>. Od lat zajmuję się naprawianiem tego, co zepsuli deweloperzy i operatorzy internetowi. 
            </p>
            <p>
              Zbyt często widzę piękne, nowoczesne domy, w których właściciele potykają się o kable, a wideorozmowy w domowym biurze zrywają się, bo router od dostawcy nie radzi sobie z grubymi ścianami.
            </p>
            <p>
              Założyłem <span className="text-white font-semibold">qb-net</span> z jedną misją: budować sieci i systemy Smart Home, o których istnieniu po prostu zapominasz. Bez migających na czerwono lampek, bez ciągłego restartowania urządzeń. Robię to raz, a dobrze.
            </p>
          </div>

          {/* Małe punkty z wartościami */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span className="text-neutral-200">Brak ukrytych kosztów</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span className="text-neutral-200">Czystość po montażu</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span className="text-neutral-200">Sprzęt dobrany pod budżet</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span className="text-neutral-200">Wsparcie po instalacji</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}