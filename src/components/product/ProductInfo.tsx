import React from 'react';
import { Star, MapPin, Leaf } from 'lucide-react';
import type { Product } from '../../types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-2xl font-bold text-green-400">${product.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <img 
            src={product.seller.avatar} 
            alt={product.seller.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium">{product.seller.name}</span>
              {product.seller.isLive && (
                <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-xs">LIVE</span>
              )}
            </div>
            <div className="flex items-center text-sm text-yellow-400">
              <Star className="mr-1 h-4 w-4 fill-current" />
              <span>{product.seller.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.isLocal && (
            <span className="flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
              <MapPin className="mr-1 h-3 w-3" /> Local Seller
            </span>
          )}
          {product.isEco && (
            <span className="flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
              <Leaf className="mr-1 h-3 w-3" /> Eco-Friendly
            </span>
          )}
          {product.shipping.express && (
            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-400">
              Express Shipping
            </span>
          )}
        </div>
      </div>
    </div>
  );
}