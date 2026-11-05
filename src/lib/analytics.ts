/**
 * Production-only marketing tags for the public website.
 *
 * Loads the official snippets Google provides:
 *  - Google Analytics (gtag.js)  → VITE_GA_MEASUREMENT_ID (e.g. G-…)
 *  - Google Tag Manager          → VITE_GTM_ID (e.g. GTM-…) + noscript after <body>
 *  - Microsoft Clarity           → VITE_CLARITY_PROJECT_ID
 *
 * Gates: Vite production build + not localhost + cookie consent accepted.
 *
 * Important: If you load GA via gtag here, do NOT also add a GA4 Configuration
 * tag inside GTM for the same property (that double-counts pageviews).
 */

export const COOKIE_CONSENT_KEY = "cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function isLocalHost(): boolean {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0";
}

function canLoadMarketingTags(): boolean {
  if (!import.meta.env.PROD) return false;
  if (isLocalHost()) return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

/** Official Google Analytics gtag.js snippet */
function loadGoogleAnalytics(measurementId: string): void {
  const src = document.createElement("script");
  src.async = true;
  src.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(src);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

/** Official Google Tag Manager head + body noscript snippets */
function loadGoogleTagManager(gtmId: string): void {
  // Head snippet (equivalent of the IIFE Google gives you)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);

  // Body noscript (immediately after opening <body>)
  if (!document.getElementById("gtm-noscript")) {
    const noscript = document.createElement("noscript");
    noscript.id = "gtm-noscript";
    noscript.innerHTML =
      `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}" ` +
      `height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }
}

function loadMicrosoftClarity(projectId: string): void {
  const el = document.createElement("script");
  el.text = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", ${JSON.stringify(projectId)});
  `;
  document.head.appendChild(el);
}

let initialized = false;

/** Call on app boot and after the user accepts cookies. */
export function initAnalytics(): void {
  if (initialized || !canLoadMarketingTags()) return;

  const gaId = String(import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();
  const gtmId = String(import.meta.env.VITE_GTM_ID || "").trim();
  const clarityId = String(import.meta.env.VITE_CLARITY_PROJECT_ID || "").trim();
  if (!gaId && !gtmId && !clarityId) return;

  initialized = true;

  // Order matches Google’s guidance: gtag / GTM as early as practical in <head>
  if (gaId) loadGoogleAnalytics(gaId);
  if (gtmId) loadGoogleTagManager(gtmId);
  if (clarityId) loadMicrosoftClarity(clarityId);
}

export function onCookieConsentAccepted(): void {
  initAnalytics();
}
