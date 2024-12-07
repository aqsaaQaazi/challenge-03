import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../app/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Project',
  description: 'A pixel-perfect ecommerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

