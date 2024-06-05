"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./_components";
import { UserContext } from "./_contexts/UserContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MTG DECK CREATOR",
//   description: "Search, create and print your mtg deck",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<any>();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          {children}
          <Footer />
        </UserContext.Provider>
      </body>
    </html>
  );
}
