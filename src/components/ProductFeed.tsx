import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import ProductCard from './ProductCard';
import type { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    seller: {
      id: 's1',
      name: 'Tech Haven',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    likes: 1234,
    comments: 89,
    isLiked: false,
    isSaved: false,
  },
  {
    id: '2',
    title: 'Minimalist Watch Collection',
    price: 199.99,
    description: 'Elegant minimalist watch with leather strap',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    seller: {
      id: 's2',
      name: 'Timepiece Gallery',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    likes: 2567,
    comments: 156,
    isLiked: false,
    isSaved: false,
  },
];

export default function ProductFeed() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);

  const handleLike = (id: string) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { 
            ...product, 
            isLiked: !product.isLiked,
            likes: product.isLiked ? product.likes - 1 : product.likes + 1
          }
        : product
    ));
  };

  const handleSave = (id: string) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, isSaved: !product.isSaved }
        : product
    ));
  };

  const handleAddToCart = (id: string) => {
    // Implement cart functionality
    console.log('Added to cart:', id);
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onLike={handleLike}
          onSave={handleSave}
          onAddToCart={handleAddToCart}
        />
      ))}
      
      {/* Navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-black/90 p-4 text-white backdrop-blur-lg">
        <button className="flex flex-col items-center">
          <ChevronUp className="h-6 w-6" />
          <span className="mt-1 text-xs">For You</span>
        </button>
        {/* Add other navigation items */}
      </nav>
    </div>
  );
}