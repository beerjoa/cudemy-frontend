/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Default
  readonly VITE_APP_NAME: string;

  // API
  readonly VITE_CUDM_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
