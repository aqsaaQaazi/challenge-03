import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm">We are a leading ecommerce platform offering a wide range of products.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/category/men" className="text-sm hover:underline">Men</Link></li>
              <li><Link href="/category/women" className="text-sm hover:underline">Women</Link></li>
              <li><Link href="/category/kids" className="text-sm hover:underline">Kids</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:underline">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:underline">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm hover:underline">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2023 Ecommerce Project. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

