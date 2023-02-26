import CustomThemeProvider from "@/components/CustomThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col min-h-screen mx-auto">
            <Navbar />
            <main className="flex-1">{children}</main>
            <div className="shrink-0">
              <Footer />
            </div>
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
