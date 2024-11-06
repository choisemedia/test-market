import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';

const CART_ITEMS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800',
    title: 'Sony WH-1000XM4 Wireless Headphones',
    seller: 'Tech Haven',
    price: 349.99,
    quantity: 1,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800',
    title: 'Nike Air Max 2023',
    seller: 'SportStyle',
    price: 179.99,
    quantity: 2,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800',
    title: 'Handcrafted Ceramic Mug Set',
    seller: 'ArtisanCrafts',
    price: 49.99,
    quantity: 1,
  }
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="mb-6 text-2xl font-bold text-white">Shopping Cart</h1>

        <div className="space-y-4">
          {/* Cart items */}
          <div className="space-y-4">
            {CART_ITEMS.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-lg bg-gray-800 p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.seller}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-green-400">${item.price}</p>
                    <div className="flex items-center gap-2">
                      <button className="rounded-full bg-gray-700 p-1">
                        <Minus className="h-4 w-4 text-white" />
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button className="rounded-full bg-gray-700 p-1">
                        <Plus className="h-4 w-4 text-white" />
                      </button>
                      <button className="ml-2 rounded-full bg-red-500 p-1">
                        <Trash2 className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart summary */}
          <div className="rounded-lg bg-gray-800 p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-4 w-full rounded-full bg-green-500 py-3 font-bold text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}