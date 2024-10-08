import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="bg-gray-400 p-7 flex gap-20">
          <Link href={`/#`}>Home</Link>
          <Link href={`/dashboard`}>Dashboard</Link>
          <Link href={`/customers`}>Customer</Link>
          <Link href={`/mainsettings`}>Settings</Link>
          <Link href={`/teams`}>Team</Link>
          <Link href={`/teamsDetails`}>TeamDetails</Link>
          <Link href={`/blogs`}>Blog</Link>
        </header>
        {children}
        <footer className="bg-gray-400 p-7 mt-10">
          This is the Footer
        </footer>
      </body>
    </html>
  );
}
