import ChatBot from "@/components/home/Chatbot";
import Navbar from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/Theme/ThemeProvider";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          `bg-bgWhite dark:bg-bgBlack font-sans antialiased ${geistSans.variable} `
        )}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow-[1] relative">
              <ChatBot />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
