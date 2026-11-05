/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_API_URL?: string;
  /** Google Analytics Measurement ID, e.g. G-XXXXXXXX */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Google Tag Manager container ID, e.g. GTM-XXXXXXX */
  readonly VITE_GTM_ID?: string;
  /** Microsoft Clarity project ID */
  readonly VITE_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
