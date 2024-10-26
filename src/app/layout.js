import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomeLayouts/Header";
import Footer from "@/components/HomeLayouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scolarite",
  description: "Empowering Your Educational Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}