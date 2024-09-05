import { generatePushSubscription } from "./generatePushSubscription";
import { saveSubscriptionToDB } from "./saveSubscriptionToDB";

export async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    console.log("Notification permission granted.");
    try {
      const registration = await navigator.serviceWorker.ready;
      const pushSubscription = await generatePushSubscription(registration);
      await saveSubscriptionToDB(pushSubscription);
    } catch (error) {
      console.log("save error");
      console.log(error);
    }
  } else if (permission === "denied") {
    console.log("Notification permission denied.");
    // 사용자가 알림을 거부한 경우 처리할 로직
  } else {
    console.log("Notification permission dismissed.");
    // 사용자가 알림 요청을 무시했을 경우 처리할 로직
  }
}
