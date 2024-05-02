import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header/Header";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kadir Alp Çil",
  description: "Kadir Alp Çil Software developer personal WebSite",
  icons: {
    icon: [
      { url: 'https://e7.pngegg.com/pngimages/980/714/png-clipart-computer-icons-code-symbol-coding-miscellaneous-angle.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
