/** @type {import('next').NextConfig} */
const nextConfig = {
  // Włącza tryb standalone, idealny dla Dockera
  output: 'standalone',
  // Opcjonalnie: wyłącza sprawdzanie typów podczas budowania w Dockerze 
  // (zakładamy, że błędy łapiesz u siebie w edytorze)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
