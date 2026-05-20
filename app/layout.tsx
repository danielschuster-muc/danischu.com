import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#254884",
  colorScheme: "light",
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
  metadataBase: new URL("https://danischu.com/"),
  openGraph: {
    title: "Daniel's Portfolio",
    description: "Personal Portfolio: about, projects & preferred tools",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-linear-to-tr from-[#eef5ff] to-[#f9ffeb]">
        <div id="modal-root" />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
