import type { Viewport } from "next";
import Curtain from "@/components/orig/Curtain";
import Footer from "@/components/orig/Footer";
import Shell from "@/components/Shell";
import "./globals.css";
import "./extra.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#fffdf8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="Veu4Sq_variable hpvSLW_variable _91XIoq_variable">
      <body>
        <Curtain />
        <Shell footer={<Footer />}>{children}</Shell>
      </body>
    </html>
  );
}
