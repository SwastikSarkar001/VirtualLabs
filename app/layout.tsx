import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Virtual Labs",
  description: "Virtual Labs for Engineering Education",
  icons: '/favicon.svg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen text-foreground bg-background ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
