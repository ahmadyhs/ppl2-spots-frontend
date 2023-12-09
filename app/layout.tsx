import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import UserInfoProvider from "./lib/context/UserInfoContextProvider";
import { Toaster } from "react-hot-toast";

const fontRemote = Noto_Sans({ subsets: ["latin"], weight: "400" });
const fontLocal = localFont({ src: "../public/ProductSans-Regular.ttf" });

export const metadata: Metadata = {
  title: "Spots",
  description: "Website layanan coworking space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={fontLocal.className}>
        <Toaster />
        <UserInfoProvider>{children}</UserInfoProvider>
      </body>
    </html>
  );
}
