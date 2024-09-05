export const sendPushNotification = async (id: string = "") => {
  const dummy_id = {
    id: "5022",
  };
  const res = await fetch("/api/send-notification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dummy_id),
  });
  if (res.ok) console.log("success to send push-notification!!!!", res);
};
