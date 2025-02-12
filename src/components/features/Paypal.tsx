import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function Paypal() {
  const createOrder = (data: any, actions: any) => {
    console.log("data: ", data);
    console.log("actions: ", actions);
    return actions.subscription.create({
      plan_id: "P-90903184VC323635BM6WH45Y",
    });
  };

  const onApprove = (data: any, actions: any) => {
    console.log("data: ", data);
    alert(data.subscriptionID);
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PAYPAL_CLIENT_ID as string,
        vault: true,
      }}
    >
      <PayPalButtons
        createSubscription={createOrder}
        // @ts-ignore
        onApprove={onApprove}
        onError={(err) => {
          console.error("Subscription Error:", err);
          alert("Payment failed. Please try again.");
        }}
      />
    </PayPalScriptProvider>
  );
}
