import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured products */}
          {[1, 2, 3].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/images/product-${product}.jpg`}
                alt={`Product ${product}`}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Product {product}</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$99.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Men', 'Women', 'Kids'].map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-gray-100 rounded-lg p-8 text-center hover:bg-gray-200 transition duration-300"
            >
              <h3 className="text-2xl font-semibold">{category}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

