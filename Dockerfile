# Stage 1 — Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# Stage 2 — Serve
FROM nginx:alpine

COPY --from=builder /app/dist/qrcode-frontend/browser /usr/share/nginx/html

# SPA routing: redirect 404s to index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
