import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";

export const metadata: Metadata = {
  title: "Duhzine | Build a Website That Attracts, Engages & Converts",
  description: "Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company helping businesses build, launch, and grow through custom software, high-performance websites, mobile apps, SaaS solutions, cloud technologies, and digital marketing.",
  keywords: ["software development chennai", "web development", "mobile app development", "duhzine", "duhzine it solutions", "custom software"],
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
      </body>
    </html>
  );
}
