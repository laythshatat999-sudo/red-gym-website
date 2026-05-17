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
  metadataBase: new URL('https://redfit.ae'),
  title: {
    default: 'Red Gym — Combat Sports & Fitness in Barsha Heights, Dubai',
    template: '%s | Red Gym Dubai',
  },
  description:
    'Red Gym is a 25,000 sqft combat sports and fitness facility in Vista Tower, Barsha Heights, Dubai. 11+ class types. Open 6 AM to 11 PM daily.',
  applicationName: 'Red Gym',
  keywords: [
    'Red Gym',
    'Dubai gym',
    'Barsha Heights gym',
    'Vista Tower gym',
    'combat sports Dubai',
    'MMA Dubai',
    'boxing Dubai',
    'BJJ Dubai',
    'Muay Thai Dubai',
    'CrossFit Dubai',
    'yoga Dubai',
  ],
  authors: [{ name: 'Red Gym' }],
  creator: 'Red Gym',
  publisher: 'Red Gym',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://redfit.ae',
    siteName: 'Red Gym',
    title: 'Red Gym — Combat Sports & Fitness in Barsha Heights, Dubai',
    description:
      'Red Gym is a 25,000 sqft combat sports and fitness facility in Vista Tower, Barsha Heights, Dubai. 11+ class types. Open 6 AM to 11 PM daily.',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Red Gym — Dubai combat sports and fitness facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Gym — Dubai Combat Sports & Fitness',
    description: '25,000 sqft. 11+ class types. Real coaches. Vista Tower, Barsha Heights.',
    images: ['/images/og/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://redfit.ae',
  },
  verification: {
    // google: 'GOOGLE_SITE_VERIFICATION_CODE',  // Add when Search Console is set up
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
