import GlobalTriggers from "@/components/features/GlobalTriggers";
import LoadGumroad from "@/components/features/LoadGumroad";
import Providers from "@/components/features/Providers";
import QueryProviders from "@/utils/query-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
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
  title: "TightFund - Know how much emergency fund you really need",
  description: "Know how much emergency fund you really need",
  openGraph: {
    ...ogImage,
    title: "TightFund - Know how much emergency fund you really need",
    description: "Know how much emergency fund you really need",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-main`}
      >
        <QueryProviders>
          <Suspense>
            <Providers>
              <LoadGumroad />
              <GlobalTriggers />
              {children}
            </Providers>
          </Suspense>
        </QueryProviders>
      </body>
    </html>
  );
}
