import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "USA Cars - Buy & Export Vehicles",
  description: "Easily buy and export vehicles from North America.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Full-Width Header */}
        <Header />

        {/* Main Content (Full Width) */}
        <main className="w-full">{children}</main>

        {/* Full-Width Footer */}
        <Footer />
      </body>
    </html>
  );
}
