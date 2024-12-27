import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer2.0'
import { CartProvider } from '../app/contexts/CartContext'
import { Lato } from 'next/font/google'


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
});


export const metadata = {
  title: 'Ecommerce Project Hecto',
  description: 'A pixel-perfect ecommerce website cloned by by Aqsaa Qaazi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

