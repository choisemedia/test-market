import React from 'react';
import { Heart, MessageCircle, Share2, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export default function ProductCard({ product, onLike, onSave, onAddToCart }: ProductCardProps) {
  return (
    <div className="relative h-screen w-full snap-start bg-black">
      <img 
        src={product.imageUrl} 
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Product info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-2xl font-bold text-green-400">${product.price}</p>
            
            <div className="mt-2 flex items-center space-x-2">
              <img 
                src={product.seller.avatar} 
                alt={product.seller.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-medium">{product.seller.name}</span>
              <div className="flex items-center text-yellow-400">
                {'★'.repeat(Math.floor(product.seller.rating))}
                <span className="ml-1 text-sm">({product.seller.rating})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-20 right-4 flex flex-col space-y-4">
        <button 
          onClick={() => onLike(product.id)}
          className="flex flex-col items-center"
        >
          <div className={`rounded-full bg-black/50 p-3 ${product.isLiked ? 'text-red-500' : 'text-white'}`}>
            <Heart className={`h-6 w-6 ${product.isLiked ? 'fill-current' : ''}`} />
          </div>
          <span className="mt-1 text-sm text-white">{product.likes}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="rounded-full bg-black/50 p-3 text-white">
            <MessageCircle className="h-6 w-6" />
          </div>
          <span className="mt-1 text-sm text-white">{product.comments}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="rounded-full bg-black/50 p-3 text-white">
            <Share2 className="h-6 w-6" />
          </div>
          <span className="mt-1 text-sm text-white">Share</span>
        </button>

        <button 
          onClick={() => onAddToCart(product.id)}
          className="flex flex-col items-center"
        >
          <div className="rounded-full bg-green-500 p-3 text-white">
            <ShoppingCart className="h-6 w-6" />
          </div>
          <span className="mt-1 text-sm text-white">Buy</span>
        </button>
      </div>
    </div>
  );
}