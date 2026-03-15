# Etap 1: Zależności
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Etap 2: Budowanie aplikacji
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Budujemy aplikację
RUN npm run build

# Etap 3: Środowisko produkcyjne (Runner)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Zabezpieczenie: aplikacja nie działa jako root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Kopiujemy tylko to, co jest niezbędne do działania
COPY --from=builder /app/public ./public
# Kopiujemy pliki wygenerowane przez tryb standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Uruchamiamy serwer Node (plik server.js jest generowany przez tryb standalone)
CMD ["node", "server.js"]
