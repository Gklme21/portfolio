import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "./NavBar";
import Footer from "./Footer";
import { GoogleAnalytics } from "./GoogleAnalytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gokul-Portfolio",
  description: "Gokul-Marakkanam-Eggiar-portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
