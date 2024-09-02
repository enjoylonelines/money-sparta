import { urlB64ToUint8Array } from "./urlB64ToUint8Array";

export const generatePushSubscription = async (
  registration: ServiceWorkerRegistration
) => {
  const applicationServerKey = urlB64ToUint8Array(
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
  );
  const options = {
    applicationServerKey,
    userVisibleOnly: true,
  };

  const pushSubscription = await registration.pushManager.subscribe(options);
  console.log(pushSubscription);
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pushSubscription),
    });
    return res.json();
  } catch {}
};
