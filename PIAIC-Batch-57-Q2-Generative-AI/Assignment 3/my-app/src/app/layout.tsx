import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <header className="p-8 flex gap-6 bg-gray-400 mb-7">
          <Link href={`/#`}>Home</Link>
          <Link href={`/name`}>Name</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
