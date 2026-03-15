"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Tworzymy obiekt JSON bezpośrednio z inputów (name, email, message)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Zmieniliśmy adres URL na nasz lokalny endpoint w Next.js
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset(); 
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="kontakt" className="w-full py-24 bg-neutral-950 relative z-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skontaktuj się</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Masz pytanie, chcesz zarezerwować termin lub po prostu potrzebujesz pomocy z siecią? 
            Wypełnij formularz — odpowiem najszybciej jak się da.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl relative"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Imię i nazwisko" required className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors" />
              <input type="email" name="email" placeholder="Adres e-mail" required className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors" />
            </div>
            <textarea name="message" placeholder="W czym mogę pomóc?" rows={5} required className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors resize-none"></textarea>
            
            <button type="submit" disabled={status === "submitting"} className="w-full md:w-auto self-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {status === "submitting" ? "Wysyłanie..." : "Wyślij wiadomość"}
            </button>
          </form>
        </motion.div>

        {/* Eleganckie okienka Toast Notifications */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-neutral-900 border border-green-500/30 text-green-400 px-6 py-4 rounded-full shadow-2xl"
            >
              <div className="flex-shrink-0 bg-green-500/20 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium whitespace-nowrap">Wiadomość wysłana! Odezwę się wkrótce.</span>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-neutral-900 border border-red-500/30 text-red-400 px-6 py-4 rounded-full shadow-2xl"
            >
              <div className="flex-shrink-0 bg-red-500/20 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="font-medium whitespace-nowrap">Wystąpił błąd. Spróbuj ponownie.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.8 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-24 text-center"
        >
          <h3 className="text-xl text-neutral-400 mb-4">... lub po prostu zadzwoń</h3>
          <a href="tel:+48732040365" className="text-4xl md:text-6xl font-bold text-white hover:text-neutral-300 transition-colors">
            +48 732 040 365
          </a>
        </motion.div>

      </div>
    </section>
  );
}