import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://duhzine.com"),
  title: {
    default: "Duhzine | Build a Website That Attracts, Engages & Converts",
    template: "%s | Duhzine IT Solutions",
  },
  description:
    "Duhzine IT Solutions Pvt. Ltd. is a premier software and digital technology company helping businesses build, launch, and grow through custom software, high-performance websites, mobile apps, SaaS solutions, cloud technologies, and digital marketing.",
  keywords: [
    "software development chennai",
    "web development chennai",
    "mobile app development",
    "duhzine",
    "duhzine it solutions",
    "custom software",
    "IT solutions chennai",
    "CRM software",
  ],
  authors: [{ name: "Duhzine IT Solutions Pvt. Ltd." }],
  openGraph: {
    title: "Duhzine | Build a Website That Attracts, Engages & Converts",
    description:
      "Software & digital technology company helping businesses build, launch, and grow through custom software, high-performance websites, mobile apps, SaaS solutions, and digital marketing.",
    url: "https://duhzine.com",
    siteName: "Duhzine IT Solutions",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#f8faff] text-[#0f172a] font-sans selection:bg-blue-600 selection:text-white">
        <ScrollAnimationProvider>
          {children}
        </ScrollAnimationProvider>
        <WhatsAppFloatingButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
