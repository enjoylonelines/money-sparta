export const saveSubscriptionToDB = async (
  pushSubscription: PushSubscription
) => {
  console.log(pushSubscription);
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pushSubscription),
    });

    if (res.ok) {
      console.log("Subscription saved to DB successfully");
    } else {
      console.error("Failed to save subscription to DB");
    }
  } catch (error) {
    console.error("Error saving subscription:", error);
  }
};
