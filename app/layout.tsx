import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Loading from "../components/loading";
import Navbar from "./navbar";
import Footer from "./footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

//This is metadata for SEO purposes.
// %s is the variable for title metadata for each page
export const metadata: Metadata = {
  title: "Pathway to US",
  description: "Intuitive display of information of US Institutions",
};

//This is a root layout and is required. Any UI you add to the root layout will be shared
//across ALL pages in the application.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
