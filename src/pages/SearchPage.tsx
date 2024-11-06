import React, { useState } from 'react';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';

const SAMPLE_PRODUCTS = [
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
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800',
    title: 'Ceramic Mug Set',
    price: 49.99,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800',
    title: 'Yoga Mat',
    price: 89.99,
  }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageContainer>
      <div className="p-4">
        <div className="sticky top-0 z-10 bg-black pb-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="rounded-full bg-gray-800 p-2 text-white">
              <SlidersHorizontal className="h-6 w-6" />
            </button>
          </div>

          {/* Categories */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'].map((category) => (
              <button
                key={category}
                className="whitespace-nowrap rounded-full bg-gray-800 px-4 py-2 text-sm text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Grid */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SAMPLE_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-800">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-0 p-2">
                <h3 className="text-sm font-medium text-white">{product.title}</h3>
                <p className="text-lg font-bold text-green-400">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}