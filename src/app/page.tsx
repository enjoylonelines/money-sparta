"use client";
import { requestNotificationPermission } from "@/utils/requestNotificationPermission";
import { sendPushNotification } from "@/utils/sendPushNotification";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (
      Notification.permission === "default" ||
      Notification.permission === "denied"
    ) {
      requestNotificationPermission();
    }
  }, []);

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      don-sparta
      <button onClick={() => sendPushNotification()}>푸시 알람 보내기</button>
    </div>
  );
}
