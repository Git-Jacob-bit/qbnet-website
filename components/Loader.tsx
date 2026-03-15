"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      sessionStorage.setItem("hasSeenLoader", "true");
      
      // Zostawiamy 2.5s, żeby pasek zdążył się ładnie zapełnić
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
      setShowLoader(false);
    }
  }, []);

  if (!showLoader) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          // Zostawiamy eleganckie rozmycie przy znikaniu
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-sm px-8">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center z-10 w-full"
            >
              {/* Czysty, biały tekst */}
              <span className="text-4xl md:text-5xl font-black tracking-[0.2em] text-white mb-8">
                QB-NET
              </span>
              
              {/* Kontener na pasek ładowania (ciemnoszare tło) */}
              <div className="w-full h-[2px] bg-neutral-900 rounded-full overflow-hidden mb-6 relative">
                {/* Właściwy, płynący biały pasek postępu */}
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  // Pasek ładuje się przez 2 sekundy (chwilę przed zniknięciem całości)
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>

              {/* Subtelny tekst pod paskiem */}
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-[10px] md:text-xs tracking-[0.3em] text-neutral-500 uppercase font-mono"
              >
                Inicjalizacja
              </motion.span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}