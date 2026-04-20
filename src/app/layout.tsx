import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "THE ATELIER | High-End Luxury Diamonds & Jewelry",
  description:
    "A destination for those who seek the extraordinary. Curating timeless brilliance since 1924.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} antialiased selection:bg-primary-container-custom selection:text-on-primary-container`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TopNavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
