import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./config/theme";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livebank",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/logo.png" />
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <Header />
            {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
