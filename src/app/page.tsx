"use client";
import { generatePushSubscription } from "@/utils/pushSubscription/generatePushSubscription";
import { saveSubscriptionToDB } from "@/utils/pushSubscription/saveSubscriptionToDB";
import { sendPushNotification } from "@/utils/pushSubscription/sendPushNotification";

const process = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log(permission);

    const registration = await navigator.serviceWorker.ready.catch((err) => {
      console.error("Service worker failed to get ready:", err);
    });
    console.log(registration);
    if (!registration) return;
    const pushSubscription = await generatePushSubscription(registration);
    console.log(pushSubscription);
    //await saveSubscriptionToDB(pushSubscription);
  } catch (error) {
    console.error(error);
  }
};

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      don-sparta
      <button onClick={() => process()}>구독 요청, DB 저장</button>
      <button onClick={() => sendPushNotification()}>푸시 알람 보내기</button>
    </div>
  );
}
