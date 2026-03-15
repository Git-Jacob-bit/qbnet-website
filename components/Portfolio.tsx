"use client";

import { motion } from "framer-motion";

// Definiujemy, jak ma wyglądać pojedynczy projekt
export interface ProjectData {
  title: string;
  problem: string;
  solution: string;
}

// Komponent teraz przyjmuje dwa parametry: nagłówek i listę projektów
interface PortfolioProps {
  heading?: string;
  subheading?: string;
  projects: ProjectData[];
}

export default function Portfolio({ 
  heading = "Zobacz, jak to robimy", 
  subheading = "Zmieniamy technologiczny chaos w niezawodne rozwiązania.",
  projects 
}: PortfolioProps) {
  
  // Jeśli nie przekażesz projektów, komponent nic nie wyświetli (zabezpieczenie)
  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full py-24 px-4 bg-black border-t border-neutral-900 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400"
          >
            {subheading}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-900/40 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-neutral-700 transition-colors"
            >
              
              {/* Lewa strona - Wyzwanie */}
              <div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-800/50 bg-black/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-500/5 blur-[50px]"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  </span>
                  <span className="text-neutral-400 font-semibold uppercase tracking-wider text-sm">Wyzwanie / Problem</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{project.problem}</p>
                
                {/* Miejsce na zdjęcie */}
                <div className="mt-8 h-48 w-full rounded-xl border border-dashed border-neutral-800 flex items-center justify-center bg-neutral-950/50">
                  <span className="text-neutral-600 text-sm">Zdjęcie "Przed" lub screen starej strony</span>
                </div>
              </div>

              {/* Prawa strona - Rozwiązanie */}
              <div className="flex-1 p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-colors"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Rozwiązanie qb-net</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 invisible">Spacer</h3>
                <p className="text-neutral-300 leading-relaxed">{project.solution}</p>
                
                {/* Miejsce na zdjęcie */}
                <div className="mt-8 h-48 w-full rounded-xl border border-neutral-800 flex items-center justify-center bg-neutral-900 relative overflow-hidden group-hover:border-neutral-700 transition-colors">
                  <span className="text-neutral-500 text-sm">Zdjęcie "Po" lub screen nowej strony</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}