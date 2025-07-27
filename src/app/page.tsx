import Navbar from "@/components/features/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>HOMEPAGE</div>
      <GoogleAnalytics gaId="G-KE3B6ZGJCY" />
    </>
  );
}
