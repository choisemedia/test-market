import React, { useState } from 'react';
import ProductCard from './ProductCard';
import BottomNav from '../navigation/BottomNav';
import type { Product } from '../../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM4 Wireless Headphones',
    price: 349.99,
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200',
    seller: {
      id: 's1',
      name: 'Tech Haven',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
      isLive: true,
    },
    likes: 1234,
    comments: 89,
    isLiked: false,
    isSaved: false,
    category: 'Electronics',
    tags: ['headphones', 'wireless', 'audio'],
    isEco: true,
    stock: 50,
    shipping: {
      express: true,
      price: 9.99,
      estimatedDays: 2,
    },
  },
  {
    id: '2',
    title: 'Minimalist Leather Watch',
    price: 199.99,
    description: 'Classic design with genuine leather strap',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200',
    seller: {
      id: 's2',
      name: 'Timepiece Gallery',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
      isLive: false,
    },
    likes: 2567,
    comments: 156,
    isLiked: false,
    isSaved: false,
    category: 'Accessories',
    tags: ['watch', 'leather', 'minimalist'],
    isLocal: true,
    stock: 25,
    shipping: {
      express: false,
      price: 4.99,
      estimatedDays: 5,
    },
  },
  {
    id: '3',
    title: 'Nike Air Max 2023',
    price: 179.99,
    description: 'Latest edition with enhanced comfort and style',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200',
    seller: {
      id: 's3',
      name: 'SportStyle',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=400',
      isLive: true,
    },
    likes: 3456,
    comments: 234,
    isLiked: false,
    isSaved: false,
    category: 'Shoes',
    tags: ['sneakers', 'nike', 'sports'],
    isEco: false,
    stock: 100,
    shipping: {
      express: true,
      price: 7.99,
      estimatedDays: 1,
    },
  },
  {
    id: '4',
    title: 'iPhone 14 Pro Max',
    price: 1099.99,
    description: 'Latest iPhone with pro camera system',
    imageUrl: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=1200',
    seller: {
      id: 's4',
      name: 'Apple Store',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400',
      isLive: false,
    },
    likes: 5678,
    comments: 432,
    isLiked: false,
    isSaved: false,
    category: 'Electronics',
    tags: ['iphone', 'apple', 'smartphone'],
    isEco: true,
    stock: 75,
    shipping: {
      express: true,
      price: 0,
      estimatedDays: 1,
    },
  },
  {
    id: '5',
    title: 'Handcrafted Ceramic Mug Set',
    price: 49.99,
    description: 'Set of 4 artisan-made ceramic mugs',
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200',
    seller: {
      id: 's5',
      name: 'ArtisanCrafts',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400',
      isLive: true,
    },
    likes: 890,
    comments: 67,
    isLiked: false,
    isSaved: false,
    category: 'Home',
    tags: ['ceramics', 'handmade', 'kitchen'],
    isLocal: true,
    isEco: true,
    stock: 15,
    shipping: {
      express: false,
      price: 5.99,
      estimatedDays: 4,
    },
  }
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
    // Cart functionality will be implemented in the next iteration
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
      <BottomNav />
    </div>
  );
}