'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '../app/contexts/CartContext'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`}>
        <div className="relative h-64">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-100'}`}
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">View Details</span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          <Button
            onClick={() => {
              addToCart({ id, name, price, quantity: 1 })
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

