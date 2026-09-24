# CinePotter AI — AI Video Production & Marketing Platform

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](#)

> CinePotter AI is an advanced AI-powered video production and marketing platform built with React 19, TypeScript, Vite, and Tailwind CSS. It empowers creators, marketers, agencies, and creative teams to transform prompts and ideas into studio-grade videos, audios, and visual campaigns at scale.

---

## 📖 Project Overview

**CinePotter** is an all-in-one AI creative production studio designed to streamline video marketing workflows. The platform helps teams produce high-quality, branded multimedia content—including AI scriptwriting, AI voiceovers, dynamic avatars, 2D/3D video generation, and scene editing—without the traditional time and cost bottlenecks of film production.

The web application serves as CinePotter's flagship digital portal, featuring rich interactive showcase galleries, product offering deep-dives, industry-specific solutions, dynamic resource and trend knowledge hubs, and lead generation interfaces.

---

## ✨ Features

- **Interactive Dynamic Hero Section**:
  - Rotating typewriter headline highlighting multimedia capabilities (Videos, Audios, Movies, Images).
  - 360-degree revolving curved showcase arc carousel with hover-pause animations.
  - Fullscreen lightbox modal with interactive slider navigation for previewing production samples.
- **AI Production Suite Presentation**:
  - Detailed feature showcases: Script Generator, Smart Editor, AI Avatars & Voiceovers, 2D/3D Video Generation, and 4D Experience.
- **Workflow & Process Visualization**:
  - Step-by-step breakdown illustrating the creative journey from idea ideation to final video delivery.
- **Interactive Solutions Explorer**:
  - Specialized industry solutions tailored for Marketing & Advertising, E-Learning, Media & Entertainment, E-Commerce, and Corporate Communications.
- **Resources & Trend Hubs**:
  - Comprehensive guide collections, case studies, and industry trends with dynamic article routing (`/resources/:id` and `/trends/:id`).
- **Interactive Contact & Lead Generation**:
  - Full client-side validation for inquiries with real-time feedback and direct asynchronous API submission.
- **Cookie Consent Management**:
  - Persistent cookie consent banner supporting "Accept All", "Reject All", and "Customise" options with local storage persistence and smooth Framer Motion transitions.
- **Dynamic SEO & Metadata**:
  - Automated head tag management (`react-helmet-async`) providing canonical URLs, OpenGraph, and Twitter card metadata across all routes.
- **Responsive Dark Theme UI**:
  - Custom neon glassmorphism aesthetic built on Tailwind CSS with glowing accents, gradients, and fluid mobile drawer navigation.

---

## 🛠️ Technologies

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | [React 19](https://react.dev/) · [TypeScript](https://www.typescriptlang.org/) |
| **Build & Bundler** | [Vite 8](https://vitejs.dev/) · `@vitejs/plugin-react` |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/) · PostCSS · Autoprefixer |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **SEO & Meta** | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| **Icons** | [Lucide React](https://lucide.dev/) · [React Icons](https://react-icons.github.io/react-icons/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) & Custom Form Validators |
| **Linting & Quality**| [Oxlint](https://oxc.rs/) |

---

## 🧭 Pages & Routes

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.tsx` | Main landing page featuring Hero arc carousel, showcase, feature teasers, testimonials, and FAQs. |
| `/offerings` | `Offerings.tsx` | Core platform capabilities, tooling breakdown, use cases, and benefits. |
| `/solutions` | `Solutions.tsx` | Industry-specific AI video solutions, capabilities matrix, and impact metrics. |
| `/journey` | `Journey.tsx` | About page highlighting CinePotter's mission, values, and technology philosophy. |
| `/resources` | `Resources.tsx` | Knowledge base, getting started guides, tutorials, and featured articles. |
| `/resources/:id` | `Article.tsx` | Dynamic resource article view with reading layout and back-navigation. |
| `/trends` | `Trends.tsx` | AI video industry trends, emerging creative technology news, and insights. |
| `/trends/:id` | `Article.tsx` | Dynamic trend article view with category tags and social references. |
| `/contact` | `Contact.tsx` | Lead capture form, partner enquiry section, and partnership banner. |
| `/privacy` | `PrivacyPolicy.tsx` | CinePotter privacy practices, data handling, and AI training policies. |
| `/terms` | `TermsOfService.tsx` | Terms of service, platform usage rules, and legal agreements. |
| `/cookies` | `CookiesPolicy.tsx` | Detailed explanation of cookie usage and user data preferences. |

---

## 📁 Project Structure

```
Cinepotter/
├── public/                       # Static public assets
│   ├── favicon.ico / favicon.svg # Favicon assets
│   ├── icons.svg                 # SVG sprite symbols
│   └── images/                   # High-res WebP/PNG images, logos, showcase cards
├── src/
│   ├── assets/                   # Bundled static assets
│   ├── components/
│   │   ├── layout/               # Global structural components
│   │   │   ├── Navbar.tsx        # Responsive navigation bar with mobile drawer
│   │   │   ├── Footer.tsx        # Footer with newsletter, socials, trust badges
│   │   │   └── CookieBanner.tsx  # GDPR-compliant cookie consent banner
│   │   ├── sections/             # Page section modules
│   │   │   ├── Hero.tsx          # Hero with 360° carousel & lightbox
│   │   │   ├── FeaturedCard.tsx  # Journey showcase teaser
│   │   │   ├── FeaturesGrid.tsx  # Offerings capability matrix
│   │   │   ├── ShowcaseGallery.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   ├── ContactFormSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ...               # Additional section components
│   │   ├── seo/
│   │   │   └── SEO.tsx           # React Helmet Async metadata wrapper
│   │   └── ui/
│   │       └── Button.tsx        # Reusable styled button component
│   ├── lib/
│   │   └── contactForm.ts        # Contact form validation & API submission service
│   ├── pages/                    # Route-level page components
│   ├── App.css                   # Global animations and styles
│   ├── App.tsx                   # Top-level routing layout & providers
│   ├── index.css                 # Tailwind directives & theme definitions
│   └── main.tsx                  # Application entry point with BrowserRouter & HelmetProvider
├── .env.example                  # Environment variable template
├── .gitignore                    # Git exclusion rules
├── package.json                  # NPM dependencies and scripts
├── tailwind.config.js            # Tailwind CSS design system tokens
├── tsconfig.app.json             # App TypeScript configuration
├── tsconfig.node.json            # Node TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended, verified on v22)
- [npm](https://www.npmjs.com/) (or yarn / pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anitha-software-dev/cinepotter.git
   cd cinepotter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

Copy the example environment configuration file:

```bash
cp .env.example .env
```

Configure the environment variables in `.env` as appropriate:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_CONTACT_API_URL` | Endpoint for submitting contact form leads | `https://api.cinepotter.com/api/contact` |

---

## 💻 Development & Building

### Run Locally

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

Type-check with TypeScript and bundle optimized static assets for production:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Preview Production Build

Preview the generated build locally:

```bash
npm run preview
```

### Linting

Check code quality and rules using Oxlint:

```bash
npm run lint
```

---

## 🌐 Deployment

The application compiles into static HTML, JavaScript, and CSS, making it ideal for deployment on modern edge hosting platforms:

### Vercel Deployment

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add any required environment variables (such as `VITE_CONTACT_API_URL`) in the Vercel project settings under **Environment Variables**.
5. Deploy.

For client-side routing on single-page applications, ensure a `vercel.json` rewrites file or Vercel SPA routing is enabled:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify Deployment

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- Create a `public/_redirects` file with `/* /index.html 200` to support React Router history mode.

---

## 📄 License

Proprietary. All rights reserved by CinePotter.
