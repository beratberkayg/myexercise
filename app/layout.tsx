import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/provider/ReduxProviders";
import Cursor from "@/components/cursor/Cursor";
import Navbar from "@/components/navbar/Navbar";
import Loader from "@/components/Loader/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBG Exercise",
  description: "My Exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-[1000px] flex flex-col black font-light `}
      >
        <ReduxProvider>
          <Cursor />
          <Navbar />
          <main className="flex-grow ">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
