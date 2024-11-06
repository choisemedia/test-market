import React from 'react';
import type { Product } from '../../types';
import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';

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

      <ProductInfo product={product} />
      
      <ProductActions
        productId={product.id}
        likes={product.likes}
        comments={product.comments}
        isLiked={product.isLiked}
        isSaved={product.isSaved}
        onLike={onLike}
        onSave={onSave}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}