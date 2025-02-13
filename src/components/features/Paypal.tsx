import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

export default function Paypal() {
  const router = useRouter();

  const createSubscription = async (data: any, actions: any) => {
    return actions.subscription.create({
      plan_id: "P-29S23687T60891608M6WYCTA",
      custom_id: localStorage.getItem("userId"),
    });
  };

  const onApprove = (data: any, actions: any) => {
    console.log("Subscription approved:", data);
    // alert(`Subscription ID: ${data.subscriptionID}`);
    router.push("/payment/processing");
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID as string,
        components: "buttons",
        intent: "subscription",
        vault: true,
      }}
    >
      <PayPalButtons
        createSubscription={createSubscription}
        // @ts-ignore
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}
