import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import NextAuthProver from "@/Providers/NextAuthProver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProver>
          <Navbar></Navbar>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </NextAuthProver>
      </body>
    </html>
  );
}
