import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-neutral-900 pt-16 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Główna siatka stopki */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Kolumna 1: Marka */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter mb-4 inline-block">
              qb-net<span className="text-neutral-500">.</span>
            </Link>
            <p className="text-neutral-400 max-w-sm mt-4">
              Projektowanie, montaż i konfiguracja niezawodnych sieci domowych oraz systemów Smart Home. Koniec z martwymi strefami i buforowaniem.
            </p>
          </div>

          {/* Kolumna 2: Szybkie linki */}
          <div>
            <h4 className="text-white font-semibold mb-6">Nawigacja</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Strona Główna</Link></li>
              <li><Link href="/siec-domowa" className="text-neutral-400 hover:text-white transition-colors">Sieć Domowa</Link></li>
              <li><Link href="/smart-home" className="text-neutral-400 hover:text-white transition-colors">Smart Home</Link></li>
              <li><Link href="/strony-www" className="text-neutral-400 hover:text-white transition-colors">Strony internetowe</Link></li>
              <li><Link href="/polityka-prywatnosci" className="text-neutral-400 hover:text-white transition-colors">Polityka prywatności</Link></li>
              <li><Link href="/#kontakt" className="text-neutral-400 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div>
            <h4 className="text-white font-semibold mb-6">Kontakt</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+48732040365" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +48 732 040 365
                </a>
              </li>
              <li>
                <span className="text-neutral-400 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Wypełnij formularz
                </span>
              </li>
              <li>
                <span className="text-neutral-500 flex items-center gap-2 mt-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Wrocław i okolice
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Dolny pasek (Copyright i legalne) */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
          <p>© {currentYear} qb-net. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-default">NIP: Wpisz-swoj-NIP</span>
            <span className="hover:text-neutral-400 transition-colors cursor-default">REGON: Wpisz-REGON</span>
          </div>
        </div>

      </div>
    </footer>
  );
}