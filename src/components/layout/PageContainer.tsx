import React from 'react';
import BottomNav from '../navigation/BottomNav';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`min-h-screen bg-black pb-16 ${className}`}>
      {children}
      <BottomNav />
    </div>
  );
}