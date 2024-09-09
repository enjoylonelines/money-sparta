"use client";
import { generatePushSubscription } from "@/utils/pushSubscription/generatePushSubscription";
import { saveSubscriptionToDB } from "@/utils/pushSubscription/saveSubscriptionToDB";
import { sendPushNotification } from "@/utils/pushSubscription/sendPushNotification";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const process = async () => {
      try {
        const permission = await Notification.requestPermission();
        console.log(permission);
        const registration = await navigator.serviceWorker.ready;
        const pushSubscription = await generatePushSubscription(registration);
        await saveSubscriptionToDB(pushSubscription);
      } catch (error) {
        console.error(error);
      }
    };
    process();
  });

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      don-sparta
      <button onClick={() => sendPushNotification()}>푸시 알람 보내기</button>
    </div>
  );
}
