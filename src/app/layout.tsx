import CookieConsentPopup from "@/components/features/CookieConsentPopup";
import LoadGumroad from "@/components/features/LoadGumroad";
import Providers from "@/components/features/Providers";
import VerifyUser from "@/components/features/VerifyUser";
import AppContextProvider from "@/store";
import QueryProviders from "@/utils/query-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const ogImage = {
  images: [
    "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1737792113/favicon_ku3rrz.png",
  ],
};

export const metadata: Metadata = {
  title: "Peak Rivals - Marvel Rival's Hero Counter Quick Guide",
  description: "Marvel Rival's Hero Counter Quick Guide",
  openGraph: {
    ...ogImage,
    title: "Peak Rivals - Marvel Rival's Hero Counter Quick Guide",
    description: "Marvel Rival's Hero Counter Quick Guide",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171b22]`}
      >
        <QueryProviders>
          <Providers>
            <AppContextProvider>
              <VerifyUser />
              <LoadGumroad />
              <CookieConsentPopup />
              {children}
            </AppContextProvider>
          </Providers>
        </QueryProviders>
      </body>
    </html>
  );
}
