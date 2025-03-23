import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Temur steel fixing",
  description: "Temur steel fixing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Temur steel fixing</title>
        <link rel="preload" as="image" href="/texture/body-pattern.png" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="temur" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" as="image" href="/Interpriz-logo.svg" />
        {/*<link rel="preload" as="image" href="/logo-white.svg" />*/}
        {/*<link rel="preload" as="image" href="/logo-official.png" />*/}
        {/*<link rel="preload" as="image" href="/logo-official-black.png" />*/}
      </head>
      <body
        className={`${spaceGrotesk.className} flex min-h-dvh flex-col items-center bg-[url(/texture/body-pattern.png)] bg-contain antialiased`}
      >
        <Header />
        <div className="w-full flex-1">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
