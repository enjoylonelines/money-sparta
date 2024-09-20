"use client";

import { useEffect } from "react";

export default function ClientServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      registerServiceWorker();
      console.log("serviceWorker is ready");
    }
  }, []);

  return null;
}

export async function registerServiceWorker(): Promise<ServiceWorkerRegistration> {
  return await navigator.serviceWorker.register("/worker/index.js");
}
