import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Home bez kucia ścian | qb-net",
  description: "Zbuduj inteligentny dom, którym sterujesz z jednej aplikacji. Oszczędzaj na rachunkach i postaw na wygodę. Integracja Apple HomeKit, Home Assistant.",
};

export default function SmartHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}