import React from 'react';
import { useState } from 'react';
import ProductFeed from './components/product/ProductFeed';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';

export type TabType = 'home' | 'search' | 'saved' | 'cart' | 'profile';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <ProductFeed />;
      case 'search':
        return <SearchPage />;
      case 'saved':
        return <SavedPage />;
      case 'cart':
        return <CartPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <ProductFeed />;
    }
  };

  return (
    <div className="h-screen bg-black text-white">
      {renderContent()}
    </div>
  );
}