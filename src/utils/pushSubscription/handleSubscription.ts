const userId = "5022";
export const handleUnSubscription = async () => {
  try {
    const registration = await navigator.serviceWorker.ready; // 서비스 워커가 준비될 때까지 기다림
    const subscription = await registration.pushManager.getSubscription();

    if (subscription) {
      const successful = await subscription.unsubscribe();
      if (successful) {
        //setStatus(NotificationPermission.default);
        const res = await fetch("/api/unsubscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userId }), // TEMP
        });

        if (!res.ok) {
          throw new Error("Failed to update server");
        }
        console.log("Server updated successfully");
      }
    } else {
      console.log("No subscription to unsubscribe");
      //setStatus(NotificationPermission.default);
    }
  } catch (error) {
    console.error(`Error during unsubscription: ${error}`);
    alert(`Unsubscription failed: ${error}`);
  }
};
