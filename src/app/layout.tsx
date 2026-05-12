import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Gym — Dubai's Premier Combat Sports & Fitness Facility",
  description:
    "Red Gym in Barsha Heights, Dubai. 25,000 sqft of combat sports, premium strength training, and 11+ fitness classes. Free day pass available.",
  metadataBase: new URL("https://redfit.ae"),
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://redfit.ae",
    siteName: "Red Gym",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
