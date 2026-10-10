import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ymssil.com"),
  alternates: { canonical: "/" },
  title: {
    default: "YOUNG’S | Healthcare & Scientific Solutions",
    template: "%s | YOUNG’S",
  },
  description:
    "Integrated solutions across healthcare, education, research, professional development and international enterprise.",
  openGraph: {
    title: "YOUNG’S | Advancing Health. Empowering Science.",
    description:
      "A connected approach to health and science from Young’s Healthcare & Scientific Solutions International Limited.",
    url: "https://ymssil.com",
    siteName: "YOUNG’S",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Healthcare professionals in a modern clinical setting",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
