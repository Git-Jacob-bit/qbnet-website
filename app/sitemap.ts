import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // 1. Strona główna
    {
      url: 'https://qb-net.pl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // 2. Podstrona: Usługi
    {
      url: 'https://qb-net.pl/polityka-prywatnosci',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3, // Trochę mniejszy priorytet niż główna
    },
    // 3. Podstrona: Kontakt
    {
      url: 'https://qb-net.pl/siec-domowa',
      lastModified: new Date(),
      changeFrequency: 'monthly', // Zakładamy, że dane kontaktowe rzadko się zmieniają
      priority: 0.8,
    },

    {
      url: 'https://qb-net.pl/smart-home',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8, // Trochę mniejszy priorytet niż główna
    },

    {
      url: 'https://qb-net.pl/strony-www',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8, // Trochę mniejszy priorytet niż główna
    },
  ];
}