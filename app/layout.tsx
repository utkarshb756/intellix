import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";
import { CrispProvider } from "@/providers/crisp-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toaster-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#eab208",
          
        },
        layout: {
          logoPlacement: "none",
          socialButtonsPlacement:"bottom",
        },
      }}
    >
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
          <footer className="footer text-white">
             <span className="footer-text">Created by Utkarsh Bansal</span>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
