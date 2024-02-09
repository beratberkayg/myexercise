import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./redux/provider/ReduxProviders";
import Cursor from "@/components/cursor/Cursor";

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
      <body className={inter.className}>
        <ReduxProvider>
          <Cursor />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
