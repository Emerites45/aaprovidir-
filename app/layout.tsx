import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "devices.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaprovidir",
  description:
    "Aaprovidir conçoit une plateforme innovante pour accompagner les agriculteurs dans leur quotidien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
