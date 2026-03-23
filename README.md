# ScanCI 🔲

> **"Scan"** + **CI** — Référence directe au QR code et au Mobile Money (Orange Money, Wave, MTN) très utilisé en Côte d'Ivoire.

**Challenge 14-14-14 — Jour 10 — Mars 2026**

---

## 📱 Aperçu

ScanCI est un générateur de QR codes personnalisables dédié à la Côte d'Ivoire. Générez des QR codes pour vos URLs, contacts, réseaux WiFi ou emails — personnalisez les couleurs aux teintes ivoiriennes et téléchargez en PNG ou SVG.

---

## ✨ Fonctionnalités

- 🔲 **5 types de QR codes** — URL, Texte, Email, WiFi, vCard
- 🎨 **Personnalisation complète** — couleurs, taille, niveau de correction d'erreur
- 🇨🇮 **Presets couleurs CI** — Orange CI, Vert CI, Dark CI, Inverse CI
- 📥 **Export** — téléchargement en PNG ou SVG
- 🕐 **Historique** — liste de tous vos QR codes générés avec filtres par type
- 🗑️ **Suppression** — supprimez les QR codes de votre historique
- 🔐 **Authentification** — login / register avec JWT
- 🌙 **Dark mode** — interface sombre par défaut
- 📱 **Responsive** — adapté mobile et desktop

---

## 🛠️ Stack technique

| Couche | Technologie |
|---|---|
| Frontend | Angular 21 |
| Backend | Spring Boot (Java) |
| Génération QR | ZXing |
| Auth | JWT |
| Style | SCSS custom (DM Sans) |

---

## 🏗️ Architecture
```
src/app/
├── core/
│   ├── guards/
│   │   └── auth-guard.ts          → Protection des routes
│   ├── interceptors/
│   │   └── jwt-interceptor.ts     → Injection du token JWT
│   ├── models/
│   │   └── index.ts               → Interfaces TypeScript
│   └── services/
│       ├── auth.ts                → Login, register, logout
│       └── qr-code.ts             → Génération, historique, suppression
├── features/
│   ├── auth/
│   │   ├── login/                 → Page connexion
│   │   └── register/              → Page inscription
│   ├── generator/                 → Générateur de QR codes
│   ├── history/                   → Historique des QR codes
│   └── about/                     → À propos
└── shared/
    └── components/
        └── navbar/                → Navigation principale
```

---

## 🌐 API

Base URL : `https://api.scanci.chalenge14.com`

| Endpoint | Méthode | Description |
|---|---|---|
| `/auth/login` | POST | Connexion |
| `/auth/register` | POST | Inscription |
| `/qr-codes/generate` | POST | Générer un QR code |
| `/qr-codes/types` | GET | Liste des types disponibles |
| `/qr-codes/history` | GET | Historique des QR codes |
| `/qr-codes/:id` | DELETE | Supprimer un QR code |

---

## 🚀 Installation

### Prérequis

- Node.js 20+
- Angular CLI 17+

### Lancer le projet
```bash
# Cloner le repo
git clone https://github.com/bath01/14challenge-scanci-frontend.git
cd 14challenge-scanci-frontend

# Installer les dépendances
npm install

# Lancer en développement
ng serve

# Build production
ng build --configuration production
```

---

## 📦 Types de QR codes supportés

| Type | Description | Exemple |
|---|---|---|
| URL | Lien web | `https://225os.com` |
| Texte | Texte libre | `Bienvenue en CI !` |
| Email | Email avec sujet | `contact@225os.com` |
| WiFi | Accès réseau | `SSID + mot de passe` |
| vCard | Carte de contact | Nom, tel, email, entreprise |

---

## 👥 Équipe

| Nom | Rôle |
|---|---|
| Bath Dorgeles | Chef de projet & Front-end |
| Oclin Marcel C. | Dev Front-end (Angular) |
| Rayane Irie | Back-end (Spring Boot) |

---

## 📄 Licence

Open Source · [225os.com](https://225os.com) & [GitHub](https://github.com/bath01)

---

*14-14-14 // JOUR 10 // MARS 2026*
