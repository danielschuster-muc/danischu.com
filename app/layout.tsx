"use client";

import CustomThemeProvider from "@/components/CustomThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <CustomThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
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
