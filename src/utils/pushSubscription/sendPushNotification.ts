import { generatePushSubscription } from "./generatePushSubscription";

export const sendPushNotification = async (id: string = "") => {
  const registration = await navigator.serviceWorker.ready;
  const pushSubscription = await generatePushSubscription(registration);
  const dummy = {
    id: "5022",
    pushSubscription,
  };
  const res = await fetch("/api/send-notification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dummy),
  });
  if (res.ok) console.log("success to send push-notification!!!!", res);
};
