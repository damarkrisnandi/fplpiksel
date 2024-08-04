import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/main/AppHeader";
import Footer from "@/components/main/AppFooter";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fplpiksel",
  description: "Gimana OR FPLmu minggu ini?",
  icons: {
    icon: [
      {
        url: '/pixel_me_cropped.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pixel_me_cropped.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={inter.className}>
        <AppHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
