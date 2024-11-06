import React from 'react';
import { Settings, ShoppingBag, Heart, Star, ChevronRight } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';

export default function ProfilePage() {
  return (
    <PageContainer>
      <div className="p-4">
        {/* Profile header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <button className="rounded-full bg-gray-800 p-2">
            <Settings className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* User info */}
        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-white">John Doe</h2>
            <p className="text-gray-400">@johndoe</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { label: 'Orders', value: '12' },
            { label: 'Points', value: '2,450' },
            { label: 'Reviews', value: '8' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-gray-800 p-4 text-center">
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Menu items */}
        <div className="mt-6 space-y-2">
          {[
            { icon: <ShoppingBag className="h-6 w-6" />, label: 'My Orders' },
            { icon: <Heart className="h-6 w-6" />, label: 'Wishlist' },
            { icon: <Star className="h-6 w-6" />, label: 'Reviews' },
          ].map((item) => (
            <button
              key={item.label}
              className="flex w-full items-center justify-between rounded-lg bg-gray-800 p-4 text-white"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}