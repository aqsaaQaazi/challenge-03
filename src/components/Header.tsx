'use client'
import SubHeader from './Subheader'
import Link from 'next/link'
import { useState } from 'react'
import { Box, Search } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    
    <header className="bg-white shadow-md">
      <SubHeader></SubHeader>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link href="/category/men" className="hover:text-gray-600">Men</Link></li>
            <li><Link href="/category/women" className="hover:text-gray-600">Women</Link></li>
            <li><Link href="/category/kids" className="hover:text-gray-600">Kids</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search className="w-6 h-6" />
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Box className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

