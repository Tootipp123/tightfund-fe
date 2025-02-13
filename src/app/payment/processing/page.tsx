"use client";

import AnimatedLoadingIcon from "@/components/ui/AnimatedLoadingIcon";
import { useUserStore } from "@/store/User";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import io from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_SERVICE_URL;

export default function ProcessingPaymentPage() {
  const socketRef = useRef<any>(null);
  const router = useRouter();
  const { setIsMember } = useUserStore();

  useEffect(() => {
    // Establish the WebSocket connection
    socketRef.current = io(SOCKET_URL as string, {
      transports: ["websocket"],
    });

    socketRef.current.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socketRef.current.on("paymentCompleted", async (data: any) => {
      console.log("socket data: ", data);
      setIsMember(true);
      router.push("/payment/success");
    });

    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="bg-[#1B1B29] min-h-screen flex justify-center items-center">
      <div className="m-auto">
        <div className="flex items-center justify-center mb-3">
          <AnimatedLoadingIcon size="xl" />
        </div>
        <h1 className="text-neutral-100 text-center font-medium text-xl">
          Processing payment..
        </h1>
      </div>
    </main>
  );
}
