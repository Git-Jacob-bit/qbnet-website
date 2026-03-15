"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Sieć Domowa i Wi-Fi",
    description: "Projektowanie i konfiguracja niezawodnych sieci LAN. Likwidacja martwych stref Wi-Fi, dobór sprzętu i wdrażanie systemów Mesh. Szybki internet w każdym kącie domu.",
    icon: "📡",
  },
  {
    title: "Smart Home",
    description: "Inteligentny dom bez kucia ścian i wymiany kabli. Montaż i konfiguracja oświetlenia, czujników oraz automatyzacji (Apple Home, Google Home, Tuya).",
    icon: "💡",
  },
  {
    title: "Rozwiązywanie problemów",
    description: "Twój internet zwalnia wieczorami? Zrywa połączenie na Teamsach? Diagnozuję problemy z siecią, optymalizuję ustawienia routera i przywracam stabilność.",
    icon: "🔧",
  }
];

export default function Services() {
  return (
    <section id="uslugi" className="w-full py-24 bg-black relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Nagłówek sekcji */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // Tutaj dzieje się magia! once: false sprawia, że animacja powtarza się przy scrollowaniu w górę i w dół
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">W czym mogę Ci pomóc?</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Dostarczam konkretne, sprawdzone rozwiązania, które działają w codziennym użytkowaniu. Zero stresu, 100% stabilności.
          </p>
        </motion.div>

        {/* Siatka z kartami usług */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              // amount: 0.2 oznacza, że animacja odpali się, gdy 20% karty będzie widoczne na ekranie
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-800/50 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}