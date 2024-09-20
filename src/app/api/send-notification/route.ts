import { generatePushSubscription } from "@/utils/pushSubscription/generatePushSubscription";
import { NextRequest, NextResponse } from "next/server";

import webPush from "web-push";

const subject = "https://localhost:3000";
const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!;
const privateVapidKey = process.env.VAPID_PRIVATE_KEY!;

webPush.setVapidDetails(subject, publicVapidKey, privateVapidKey);

interface PushSubscriptionType {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
  expirationTime: null;
}

export async function POST(req: NextRequest) {
  try {
    const { pushSubscription }: { pushSubscription: PushSubscriptionType } =
      await req.json();

    const pushSubscriptionObj: PushSubscriptionType = {
      endpoint: pushSubscription.endpoint,
      keys: {
        p256dh: pushSubscription.keys.p256dh,
        auth: pushSubscription.keys.auth,
      },
      expirationTime: null,
    };

    // 웹 푸시 알림 전송
    await webPush.sendNotification(
      pushSubscriptionObj,
      JSON.stringify({
        title: "안녕하세요",
        body: "제가 누군지 궁금하시면 눌러보세요!",
        link: "https://www.catchfashion.com",
      }),
      {
        TTL: 3600 * 12, // 메시지의 Time-To-Live 설정
      }
    );

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error sending notification:", error);
    return NextResponse.json(
      { message: "failed", error: error },
      { status: 500 }
    );
  }
}
