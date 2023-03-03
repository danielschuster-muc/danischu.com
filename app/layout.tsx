import CustomThemeProvider from "@/components/CustomThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | Daniel Schuster's Portfolio",
  },
  description:
    "Portfolio page by Daniel Schuster: about, projects & preferred technologies",
  keywords: [
    "danielschuster",
    "portfolio",
    "programming",
    "website",
    "developer",
    "me",
    "react",
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-tr from-[#eef5ff] to-[#f9ffeb] dark:from-[#141E30] dark:to-[#2a5298]">
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
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
