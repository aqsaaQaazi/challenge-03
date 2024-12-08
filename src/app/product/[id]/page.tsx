'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '../../contexts/CartContext';

export default function ProductPage({ params }: { params: { id: unknown } }) {
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

 
  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadProduct();
  }, [params.id]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Loading product...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image: string, index: number) => (
              <Button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center space-x-4 mb-6">
            <label htmlFor="quantity" className="font-semibold">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="border rounded px-2 py-1 w-16 text-center"
            />
          </div>
          <Button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
              });
            }}
            className="w-full"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
