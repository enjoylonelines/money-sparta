export default function registerServiceWorker() {
  if (window !== undefined && "serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/worker/index.js"
        );
        console.log(
          "ServiceWorker registration successful with scope:",
          registration.scope
        );

        // `navigator.serviceWorker.ready`를 통해 서비스 워커 준비 상태 확인
        const readyWorker = await navigator.serviceWorker.ready;
        console.log("ServiceWorker is ready:", readyWorker);
      } catch (error) {
        console.error("ServiceWorker registration failed:", error);
      }
    });
  } else {
    console.log("Service Workers not supported in this browser.");
  }
}
