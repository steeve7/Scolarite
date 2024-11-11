import "./globals.css";
import Header from "@/components/HomeLayouts/Header";
import FooterWrapper from "@/components/HomeLayouts/FooterWrapper";
import { Roboto } from 'next/font/google'
import { mergeText } from './add'

const inter = Roboto({
  weight: ['300', '400', '500', '700',"900"],
  subsets: ['greek'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: "Scolarite",
  description: "Empowering Your Educational Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={mergeText(inter.className)}>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
