# CinePotter AI

[![Live Website](https://img.shields.io/badge/Live_Site-cinepotter.com-0054D1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://cinepotter.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Live Preview:** [https://cinepotter.com](https://cinepotter.com)

**CinePotter AI** is a modern AI-powered video production and marketing platform. It allows marketing teams, agencies, and creators to generate professional video content—ranging from AI scripting and voiceovers to dynamic avatars and multi-scene video editing—significantly reducing production timelines and costs.

---

## ⚡ Key Highlights & Features

- **Interactive 360° Showcase Carousel**: Custom revolving arc gallery highlighting AI-generated video assets with a fullscreen interactive lightbox modal.
- **Dynamic Multimedia Workflows**: Dedicated sections exploring AI scriptwriting, smart editing, AI avatars, voiceovers, and 2D/3D video pipelines.
- **Industry Solutions**: Tailored use cases and impact metrics for Advertising, E-Learning, Media, and E-Commerce.
- **Knowledge & Trend Hubs**: Dynamic article routing (`/resources/:id`, `/trends/:id`) with category filtering and breadcrumb navigation.
- **Lead Capture & API Integration**: Client-side validated contact system submitting leads asynchronously to the backend API.
- **GDPR Cookie Consent**: Persistent cookie banner with customizable preferences saved to `localStorage`.
- **Dynamic SEO Engine**: Route-level metadata, canonical URLs, OpenGraph, and Twitter cards powered by `react-helmet-async`.
- **Modern Responsive Dark Theme**: Neon glassmorphism aesthetic built on Tailwind CSS with fluid mobile drawer navigation.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, React Router DOM v7 |
| **Build & Tooling** | Vite 8, Oxlint |
| **Styling & Motion** | Tailwind CSS, Framer Motion, PostCSS |
| **Icons & Media** | Lucide React, React Icons |
| **SEO & Head** | React Helmet Async |
| **Deployment Target** | Edge Hosting (Vercel, Netlify, Cloudflare Pages) |

---

## 🧭 Pages & Routes

- `/` — Landing page with interactive hero, showcase arc, features grid, process, and FAQs
- `/offerings` — AI production tools, feature deep-dives, and use cases
- `/solutions` — Industry-tailored AI video capabilities and impact metrics
- `/journey` — Company story, mission, and core values
- `/resources` & `/resources/:id` — Guides, tutorials, and dynamic reader
- `/trends` & `/trends/:id` — AI video industry news and insights
- `/contact` — Partner and client inquiry form with live validation
- `/privacy`, `/terms`, `/cookies` — Privacy policy, terms, and cookie preferences

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/anitha-software-dev/cinepotter.git
cd cinepotter
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
```
Configure your `.env` (e.g. `VITE_CONTACT_API_URL=https://api.cinepotter.com/api/contact`).

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

---

## 🌐 Live Website

Preview the production deployment: **[https://cinepotter.com](https://cinepotter.com)**
