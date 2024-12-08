'use client'
import SubHeader from './Subheader'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Box, Search } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchVisible(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuRef, searchRef])

    return (
        <header className="shadow-md font-lato font-thin">
            <SubHeader />
            <div className="container mx-auto px-5 md:px-40 py-4 flex items-center justify-between">
                <Link href="/" className="text-3xl font-lato text-[#0d0e43] font-black">
                    Hekto
                </Link>
                <div ref={menuRef} className="relative">
                    <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-[#0d0e43]">
                            <li className="cursor-pointer hover:text-pink active:opacity-55 transition-colors duration-300">
                                <Link href="/" className="hover:text-pink active:opacity-55">Home</Link>
                            </li>
                            <li>
                                <select name="Categories" className="hover:text-pink focus:ring-pink transition-all duration-300">
                                    <option defaultChecked value="Categories">Categories</option>
                                    <option value="Men"><Link href="/category/men" className="hover:text-pink active:opacity-55">Men</Link></option>
                                    <option value="Women"><Link href="/category/women" className="hover:text-pink active:opacity-55">Women</Link></option>
                                    <option value="Kids"><Link href="/category/kids" className="hover:text-pink active:opacity-55">Kids</Link></option>
                                </select>
                            </li>
                            <li className="cursor-pointer hover:text-pink active:opacity-55 transition-colors duration-300">
                                <Link href="/products" className="hover:text-pink active:opacity-55">Products</Link>
                            </li>
                            <li className="cursor-pointer hover:text-pink active:opacity-55 transition-colors duration-300">
                                <Link href="/blog" className="hover:text-pink active:opacity-55">Blog</Link>
                            </li>
                            <li className="cursor-pointer hover:text-pink active:opacity-55 transition-colors duration-300">
                                <Link href="/shop" className="hover:text-pink active:opacity-55">Shop</Link>
                            </li>
                            <li className="cursor-pointer hover:text-pink active:opacity-55 transition-colors duration-300">
                                <Link href="/contact" className="hover:text-pink active:opacity-55">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    {isSearchVisible && (
                        <input
                            ref={searchRef}
                            type="search"
                            name="Search"
                            placeholder="Look for it.."
                            className="bg-off-purple w-60 pl-3 text-navy-blue text-xs px-6 py-3 rounded-[3px] md:rounded-none md:rounded-r-sm"
                        />
                    )}
                    <button
                        aria-label="Search"
                        className="transition-all duration-300 bg-pink py-3 p-2 px-5 active:bg-opacity-55"
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                    >
                        <Search className="w-5 h-4 text-white transition-all duration-100 hover:w-6 hover:h-4" />
                    </button>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <Box className="w-6 h-6" />
                </button>
            </div>
        </header>
    )
}
