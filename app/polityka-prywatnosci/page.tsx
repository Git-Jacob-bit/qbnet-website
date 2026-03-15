"use client";

import { motion } from "framer-motion";

export default function PolitykaPrywatnosci() {
  const data = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-black text-neutral-300 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Polityka Prywatności
        </motion.h1>

        <section className="space-y-8 text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazywanych przez Użytkowników w związku z korzystaniem z serwisu qb-net.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">2. Administrator Danych</h2>
            <p>
              Administratorem danych osobowych zawartych w serwisie jest [Twoje Imię i Nazwisko / Nazwa Firmy] z siedzibą we Wrocławiu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">3. Zakres zbieranych danych</h2>
            <p>Serwis zbiera informacje dobrowolnie podane przez Użytkownika w formularzu kontaktowym:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Imię i nazwisko / Nazwa firmy</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Treść zapytania</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">4. Cel przetwarzania danych</h2>
            <p>
              Dane osobowe są przetwarzane wyłącznie w celu udzielenia odpowiedzi na zapytanie wysłane 
              za pośrednictwem formularza kontaktowego oraz w celu dalszej komunikacji biznesowej.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">5. Pliki Cookies</h2>
            <p>
              Serwis korzysta z plików cookies w celu zapewnienia prawidłowego działania strony oraz 
              do celów analitycznych. Użytkownik może w każdej chwili zmienić ustawienia dotyczące 
              plików cookies w swojej przeglądarce.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">6. Twoje Prawa</h2>
            <p>Każdy Użytkownik ma prawo do:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Wglądu w swoje dane</li>
              <li>Sprostowania danych</li>
              <li>Żądania usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
            </ul>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-neutral-900 text-[12px] text-neutral-600 font-mono uppercase">
          Ostatnia aktualizacja: {data} r.
        </div>
      </div>
    </main>
  );
}