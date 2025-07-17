import type { Metadata } from "next";
import { ClientProviders } from "@/components/gallery/work/client-providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camille Mormal - Creative Portfolio",
  description: "Creative portfolio showcasing innovative design and development work",
  keywords: ["portfolio", "design", "development", "creative", "camille mormal"],
  authors: [{ name: "Camille Mormal" }],
  creator: "Camille Mormal",
  publisher: "Camille Mormal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Camille Mormal - Creative Portfolio",
    description: "Creative portfolio showcasing innovative design and development work",
    url: "https://camillemormal.com",
    siteName: "Camille Mormal Portfolio",
    images: [
      {
        url: "/images/LogoForReadMe.svg",
        width: 1200,
        height: 630,
        alt: "Camille Mormal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camille Mormal - Creative Portfolio",
    description: "Creative portfolio showcasing innovative design and development work",
    images: ["/images/LogoForReadMe.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="work-layout font-neue-haas-display">
      <ClientProviders>
        <main className="main">
          {children}
        </main>
      </ClientProviders>
    </div>
  );
}
