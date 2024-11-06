import React from 'react';
import { Heart } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';

const SAVED_ITEMS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800',
    title: 'Wireless Headphones',
    price: 349.99,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800',
    title: 'Minimalist Watch',
    price: 199.99,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800',
    title: 'Nike Sneakers',
    price: 179.99,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800',
    title: 'iPhone 14 Pro',
    price: 1099.99,
  }
];

export default function SavedPage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="mb-6 text-2xl font-bold text-white">Saved Items</h1>
        
        {/* Saved items grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {SAVED_ITEMS.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-lg bg-gray-800">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-0 p-2">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-lg font-bold text-green-400">${item.price}</p>
              </div>
              <button className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5">
                <Heart className="h-4 w-4 text-white" fill="white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}