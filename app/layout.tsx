import CustomThemeProvider from "@/components/CustomThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#254884" },
    { media: "(prefers-color-scheme: dark)", color: "#F7FDEE" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | @danielschuster-muc's Portfolio",
  },
  description: "Portfolio of @danielschuster-muc: about, projects & tools",
  keywords: [
    "danielschuster",
    "portfolio",
    "programming",
    "website",
    "developer",
    "me",
    "react",
    "danielschuster-muc",
    "danischu",
  ],
  icons: {
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
  other: {
    "msapplication-TileColor": "#254884",
  },
  metadataBase: new URL("https://danischu.com/"),
  manifest: "/manifest.json",
  openGraph: {
    title: "Daniel's Portfolio",
    description: "Personal Portfolio: about, projects & preferred tools",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-tr from-[#eef5ff] to-[#f9ffeb] dark:from-[#141E30] dark:to-[#2a5298]">
        <CustomThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="modal-root" />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
