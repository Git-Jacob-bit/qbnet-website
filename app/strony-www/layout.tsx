import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tworzenie Stron WWW i Aplikacji Webowych | qb-net",
  description: "Ultraszybkie, nowoczesne strony internetowe i zaawansowane aplikacje webowe. Kodowane od zera (Next.js), zoptymalizowane pod SEO i urządzenia mobilne.",
  openGraph: {
    title: "Nowoczesne Strony WWW | Szybkość i Niezawodność",
    description: "Zostaw w tyle powolnego WordPressa. Zbuduję dla Ciebie stronę, która ładuje się w ułamku sekundy i przyciąga klientów.",
    type: "website",
  },
};

export default function StronyWWWLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}