import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- DODANE
import { Plus_Jakarta_Sans } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Loader from "@/components/Loader";

// 2. Konfigurujemy czcionkę (latin-ext to klucz do polskich znaków!)
const modernFont = Plus_Jakarta_Sans({ 
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"], // pobieramy grubości od cienkiej po pogrubioną
  display: "swap",
});

export const metadata: Metadata = {
  title: "qb-net | Niezawodne Sieci Domowe i Smart Home Wrocław",
  description: "Koniec z martwymi strefami Wi-Fi. Projektowanie, montaż i konfiguracja sieci domowych oraz systemów Smart Home we Wrocławiu i okolicach.",
  keywords: ["sieci domowe", "smart home", "wrocław", "konfiguracja routera", "system mesh", "inteligentny dom", "montaż sieci"],
  openGraph: {
    title: "qb-net | Profesjonalne Sieci Domowe",
    description: "Twój dom zasługuje na idealne Wi-Fi bez martwych stref. Sprawdź, jak możemy pomóc.",
    url: "https://qb-net.pl", // Kiedyś podmienisz na swoją docelową domenę
    siteName: "qb-net",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tutaj dodaliśmy klasę scroll-smooth
    <html lang="pl" className="scroll-smooth">
      <body className={`${modernFont.className} bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/60 via-black to-black text-white antialiased`}>
        <Loader />
        <Navbar />
        <CookieBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}