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
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <main className="flex-grow">{children}</main>
            <div className="shrink-0 z-50">
              <Footer />
            </div>
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
