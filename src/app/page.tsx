import DraftAssistant from "@/components/features/DraftAssistant";
import Homepage from "@/components/features/Homepage";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <DraftAssistant />
      <Homepage />
      <GoogleAnalytics gaId="G-KE3B6ZGJCY" />
    </>
  );
}
