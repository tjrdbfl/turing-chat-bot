import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import "@/app/styles/variable.css";
import "@/app/styles/animations.css"
import ThemeProviders from "./containers/theme/ThemeProvider";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turing Chat",
  description: "Turing Chat is a free-to-use AI system. Use it for engaging conversations, gain insights, automate tasks, and witness the future of AI",
};

export default function RootLayout({
  children,modal
}: Readonly<{
  children: React.ReactNode,
  modal:React.ReactNode
}>) {
  return (
    
    <ClerkProvider
    signInFallbackRedirectUrl="/chat"
    signUpFallbackRedirectUrl="/chat"
    >
    <html lang="en">
      <body className="h-screen w-screen">
        <ThemeProviders>
        {children}
        {modal}
        </ThemeProviders>
      </body>
    </html>
    </ClerkProvider>
  );
}