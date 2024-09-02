import { generatePushSubscription } from "./utils/generatePushSubscription";

export default function registerServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/worker/index.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
          generatePushSubscription(registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    });
  } else {
    console.log("Service Workers not supported in this browser.");
  }
}
