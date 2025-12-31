import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meme Review - 2025 Memecoin Museum",
  description: "A Year of Chaos, Controversy & Crypto Degeneracy. Explore the biggest memecoins of 2025 in an immersive 3D gallery experience.",
  keywords: ["meme review", "memecoin", "crypto", "2024", "museum", "3D gallery", "blockchain", "solana", "memes"],
  authors: [{ name: "Meme Review", url: "https://x.com/memereviewworld" }],
  creator: "Meme Review",
  publisher: "Meme Review",

  // Open Graph
  openGraph: {
    title: "Meme Review - 2025 Memecoin Museum",
    description: "A Year of Chaos, Controversy & Crypto Degeneracy. Explore the biggest memecoins of 2025 in an immersive 3D gallery experience.",
    url: "https://memereview.world",
    siteName: "Meme Review",
    images: [
      {
        url: "/memereview_pfp.png",
        width: 1200,
        height: 1200,
        alt: "Meme Review - 2025 Memecoin Museum",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meme Review - 2025 Memecoin Museum",
    description: "A Year of Chaos, Controversy & Crypto Degeneracy. Explore the biggest memecoins of 2025 in an immersive 3D gallery experience.",
    creator: "@memereviewworld",
    site: "@memereviewworld",
    images: ["/memereview_pfp.png"],
  },

  // Icons
  icons: {
    icon: [
      { url: '/memereview_pfp.png' },
      { url: '/memereview_pfp.png', sizes: '192x192', type: 'image/png' },
      { url: '/memereview_pfp.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/memereview_pfp.png' },
    ],
    shortcut: ['/memereview_pfp.png'],
  },

  // Additional Meta
  manifest: '/manifest.json',
  applicationName: "Meme Review",
  appleWebApp: {
    capable: true,
    title: "Meme Review",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="https://memereview.world" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
