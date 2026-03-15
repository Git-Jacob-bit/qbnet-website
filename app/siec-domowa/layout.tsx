import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sieć Domowa i Wi-Fi Mesh | qb-net",
  description: "Rozwiąż problemy z zasięgiem Wi-Fi. Instalacja systemów Mesh, optymalizacja pod Home Office i gaming. Bez kucia i bez stresu.",
};

export default function SiecDomowaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}