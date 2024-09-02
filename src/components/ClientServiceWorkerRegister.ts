"use client";

import { useEffect } from "react";
import registerServiceWorker from "@/service-worker-registration";

export default function ClientServiceWorkerRegister() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}
