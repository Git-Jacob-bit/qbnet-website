"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-xl">
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-neutral-400 text-center md:text-left">
          Ta strona używa ciasteczek, aby zapewnić Ci najlepsze doświadczenia. Korzystając z niej, akceptujesz moją politykę prywatności.
        </p>
        <button 
          onClick={acceptCookies}
          className="whitespace-nowrap px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition-colors"
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
}