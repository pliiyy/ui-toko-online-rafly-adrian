import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AntdConfig from "../components/AntdConfig";
import { App } from "antd";
import { AnonymousLayout } from "@/components/layouts";
import { Cart } from "@/components/layouts";
import AllProvider from "@/components/contexts";

const jetBrains = JetBrains_Mono({
  variable: "--jetBrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Apps",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.variable} antialiased bg-gradient-to-br from-gray-50 to-blue-100 min-h-[90vh]`}
      >
        <AntdConfig>
          <App>
            <div>
              <AllProvider>
                <AnonymousLayout>{children}</AnonymousLayout>
                {/* <Cart /> */}
              </AllProvider>
            </div>
          </App>
        </AntdConfig>
      </body>
    </html>
  );
}
