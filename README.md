# Cinepotter

[![Live Website](https://img.shields.io/badge/Live_Site-cinepotter.com-0054D1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://cinepotter.com)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2F6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Live Production Website:** [https://cinepotter.com](https://cinepotter.com)

**Cinepotter** is a modern, high-performance web application designed for next-generation AI video production and multimedia marketing. Built with cutting-edge frontend technologies, Cinepotter empowers creative agencies, enterprise marketing teams, and content creators to produce professional, cinematic video content—from automated scripting and realistic avatars to hyper-realistic voiceovers and multi-scene intelligent editing—at scale.

---

## 🌟 Executive Overview & Purpose

The rapid rise of generative video demands seamless, intuitive digital interfaces capable of presenting complex AI pipelines clearly. Cinepotter was built to bridge this gap:
- **Scalable Video Production Platform**: Showcase AI-driven video synthesis workflows that compress production cycles from weeks to minutes.
- **Enterprise-Ready Presentation**: Present tailored industry solutions for marketing, e-commerce, advertising, and corporate training.
- **High-Converting Lead Funnel**: Built-in interactive contact capture, resource centers, and educational hubs to guide users from discovery to conversion.

---

## ⚡ Main Features & Functionality

- **Interactive 360° Showcase Carousel**: Custom revolving arc gallery highlighting AI-generated video assets with a fullscreen interactive lightbox modal.
- **End-to-End AI Workflow Demos**:
  - **AI Scripting**: Automatic narrative and storyboard generation.
  - **Dynamic Avatars**: Photorealistic, multi-lingual digital personas.
  - **AI Voiceovers**: High-fidelity emotive speech synthesis.
  - **Smart Scene Editing**: Automated timeline stitching, 2D/3D composition, and transitions.
- **Industry-Specific Solutions**: Dedicated showcases and metrics for Advertising, E-Commerce, Media & Entertainment, and Corporate Learning.
- **Dynamic Content & Knowledge Hubs**:
  - Searchable Resource Center (`/resources`, `/resources/:id`).
  - Emerging Industry Trends (`/trends`, `/trends/:id`).
  - Full-Featured Technical Blog (`/blog`, `/blog/:slug`) with search, category filtering, and publication scheduling.
- **Lead Capture & API Integration**: Interactive client-side validated contact forms with asynchronous API dispatch and status feedback.
- **GDPR & Privacy Compliance**: Persistent cookie consent banner with customizable user preferences stored in `localStorage`.
- **Responsive Dark Theme UI**: Neon glassmorphism aesthetics, fluid typography, and mobile-friendly touch drawer navigation.

---

## 🛠️ Technologies & Frameworks

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19** | Latest concurrent features and component primitives |
| **Language** | **TypeScript** | Strict type safety across components, props, and data models |
| **Routing** | **React Router DOM v7** | Dynamic and nested routing with dual trailing-slash normalization |
| **Build Tool** | **Vite 8** | Lightning-fast development server with optimized rollup bundling |
| **Styling & Design** | **Tailwind CSS 3.4** | Utility-first CSS framework with custom glassmorphic styling |
| **Animation & Motion**| **Framer Motion 12** | Declarative smooth UI transitions, layout animations, and gestures |
| **Icons & Media** | **Lucide React & React Icons** | Scalable, accessible iconography |
| **SEO & Head Management** | **React Helmet Async** | Dynamic document title, canonical URLs, and OpenGraph/Twitter cards |
| **Form Handling** | **React Hook Form** | Performant, un-controlled form validation and error handling |
| **Code Quality** | **Oxlint** | High-performance Rust-based JavaScript/TypeScript linter |
| **Deployment & Hosting** | **Vercel** | Edge deployment with automated URL rewrites and trailing-slash rules |

---

## 🎯 Key Frontend Development Contributions

1. **Modular Architecture & Component Reusability**:
   - Engineered scalable directory architecture isolating `components/layout`, `components/sections`, `components/seo`, and `pages`.
   - Built reusable interactive elements including responsive navbars, custom buttons, modal dialogs, and card grids.

2. **Route Normalization & Edge Routing**:
   - Developed `slashRoutes()` helper and `TrailingSlash` component ensuring uniform canonical URLs across both root and edge environments without duplicate routing penalties.

3. **Code Splitting & Lazy Loading**:
   - Implemented route-level lazy loading (`React.lazy` and `Suspense`) for heavy views like `Blog` and `BlogDetail`, cutting initial bundle size and improving First Contentful Paint (FCP).

4. **Consent-Gated Analytics**:
   - Designed modular analytics service (`src/lib/analytics.ts`) supporting Google Analytics 4 (`gtag.js`), Google Tag Manager, and Microsoft Clarity, strictly executed only upon explicit GDPR cookie consent.

5. **Fluid Mobile & Desktop Responsiveness**:
   - Crafted fully responsive layouts adapting seamlessly across 4K displays, tablets, and mobile smartphones.

---

## 🚀 SEO & Performance Optimizations

- **Custom Static Pre-rendering Pipeline (`scripts/prerender-seo.mjs`)**:
  - Built an automated Node.js pre-rendering build step that generates 30+ static HTML pages with pre-populated meta tags, descriptions, and canonical links for search engine crawlers.
- **Automated Structured Data (JSON-LD)**:
  - Injected Schema.org schemas (`Organization`, `WebSite`, `WebPage`, `Article`, `BreadcrumbList`) for rich search snippets and enhanced Google indexing.
- **Media & Asset Optimization**:
  - Leveraged next-gen WebP imagery alongside crisp fallback PNGs.
  - Implemented `rel="preconnect"` for external Google Font origins to reduce font-blocking latency.
- **Clean XML Sitemap & Robots Configuration**:
  - Dynamically generated `sitemap.xml` with page priorities, change frequencies, and publication dates.
  - Production-ready `robots.txt` directing web spiders to official canonical paths.

---

## 💻 Installation & Setup

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/anitha-software-dev/cinepotter.git
cd cinepotter
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root:
```bash
cp .env.example .env
```
Populate any necessary environment variables:
```env
VITE_CONTACT_API_URL=https://api.cinepotter.com/api/contact
```
*(Optional for production marketing tags)*:
```env
VITE_GA_MEASUREMENT_ID=
VITE_GTM_ID=
VITE_CLARITY_PROJECT_ID=
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Production Build & Static Pre-render
```bash
npm run build
```
This compiles the TypeScript code, bundles assets with Vite, and executes the SEO pre-rendering script to output static assets into `dist/`.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Live Website

Experience Cinepotter live in production:
🔗 **[https://cinepotter.com](https://cinepotter.com)**

---

## 📄 License

This project is proprietary and confidential. All rights reserved.
