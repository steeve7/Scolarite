import { Inter ,Montserrat_Alternates,Roboto} from 'next/font/google'
import './globals.css'
import Header from '@/components/HomeLayouts/Header'
import Footer from '@/components/HomeLayouts/Footer'
import { mergeText } from './add'

const inter = Roboto({
  weight: ['300', '400', '500', '700',"900"],
  subsets: ['greek'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: 'Scolarite',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        <Header />
          <main className={mergeText(inter.className)}>{children}</main>
      <Footer />

    </body>
    </html>
  )
}
