import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./redux/provider/ReduxProviders";

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
