"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-center px-4 relative overflow-hidden">
      {/* Efekt tła, żeby pasowało do reszty strony */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-9xl font-black text-neutral-800 tracking-tighter">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6">
          Błąd połączenia z bazą...
        </h2>
        <p className="text-neutral-500 mb-10 max-w-md mx-auto leading-relaxed">
          Strona, której szukasz, została przeniesiona, usunięta lub nigdy nie istniała. 
          Sprawdź adres URL lub wróć do panelu głównego.
        </p>
        
        <Link 
          href="/" 
          className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all active:scale-95 inline-block"
        >
          Wróć do strony głównej
        </Link>
      </motion.div>

      {/* Mały akcent techniczny w rogu */}
      <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.5em] text-neutral-700 font-mono">
        Status: Terminal_Not_Found
      </div>
    </main>
  );
}