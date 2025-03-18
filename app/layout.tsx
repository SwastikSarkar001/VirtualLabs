import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "Virtual Labs",
    template: "%s | Virtual Labs",
  },
  description:
    "Explore innovative Virtual Labs designed for Engineering Education. Enhance your learning with interactive experiments and engaging online content.",
  keywords: [
    "Virtual Labs",
    "Engineering Education",
    "Interactive Experiments",
    "Online Labs",
    "IIITH",
  ],
  icons: '/favicon.svg',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Virtual Labs',
    images: [
      {
        url: '/VirtualLabs.png',
        alt: 'Virtual Labs Preview',
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheVirtualLabs",
    // creator: "@VirtualLabs",
    images: [
      {
        url: `/VirtualLabs.png`,
        alt: "Virtual Labs Preview",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen text-foreground bg-background ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
