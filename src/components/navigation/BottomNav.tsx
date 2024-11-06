import React from 'react';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import type { TabType } from '../../App';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  value: TabType;
}

const navItems: NavItem[] = [
  { icon: <Home />, label: 'For You', value: 'home' },
  { icon: <Search />, label: 'Search', value: 'search' },
  { icon: <Heart />, label: 'Saved', value: 'saved' },
  { icon: <ShoppingBag />, label: 'Cart', value: 'cart' },
  { icon: <User />, label: 'Profile', value: 'profile' },
];

export default function BottomNav() {
  const [activeTab, setActiveTab] = React.useState<TabType>('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-black/90 p-4 backdrop-blur-lg">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setActiveTab(item.value)}
          className={`flex flex-col items-center space-y-1 ${
            activeTab === item.value ? 'text-green-400' : 'text-white'
          }`}
        >
          <div className="h-6 w-6">{item.icon}</div>
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}