import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRADEVASTU ENTERPRISES - Modernizing Sales Systems for Indian Developers",
  description: "Scalable sales infrastructure tailored for the Indian real estate landscape, with localized lead intelligence and compliant workflows.",
  metadataBase: new URL("https://tradevastu.com"),
  applicationName: "TRADEVASTU ENTERPRISES",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TRADEVASTU ENTERPRISES - Modernizing Sales Systems for Indian Developers",
    description: "Scalable sales infrastructure tailored for Indian real estate and MSMEs.",
    url: "https://tradevastu.com",
    siteName: "TRADEVASTU ENTERPRISES",
    type: "website",
    images: [{ url: "/logo_tradevastu.png", width: 1200, height: 630, alt: "TRADEVASTU ENTERPRISES" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRADEVASTU ENTERPRISES",
    description: "Scalable sales infrastructure tailored for Indian real estate and MSMEs.",
    images: ["/logo_tradevastu.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo_tradevastu.png",
    shortcut: "/logo_tradevastu.png",
    apple: "/logo_tradevastu.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
