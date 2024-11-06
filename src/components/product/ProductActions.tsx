import React from 'react';
import { Heart, MessageCircle, Share2, ShoppingCart, Bookmark } from 'lucide-react';

interface ProductActionsProps {
  productId: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isSaved: boolean;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export default function ProductActions({
  productId,
  likes,
  comments,
  isLiked,
  isSaved,
  onLike,
  onSave,
  onAddToCart,
}: ProductActionsProps) {
  return (
    <div className="absolute bottom-20 right-4 flex flex-col space-y-4">
      <button 
        onClick={() => onLike(productId)}
        className="group flex flex-col items-center"
      >
        <div className={`rounded-full bg-black/50 p-3 transition-colors group-hover:bg-black/70 ${
          isLiked ? 'text-red-500' : 'text-white'
        }`}>
          <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
        </div>
        <span className="mt-1 text-sm text-white">{likes}</span>
      </button>

      <button className="group flex flex-col items-center">
        <div className="rounded-full bg-black/50 p-3 text-white transition-colors group-hover:bg-black/70">
          <MessageCircle className="h-6 w-6" />
        </div>
        <span className="mt-1 text-sm text-white">{comments}</span>
      </button>

      <button 
        onClick={() => onSave(productId)}
        className="group flex flex-col items-center"
      >
        <div className={`rounded-full bg-black/50 p-3 transition-colors group-hover:bg-black/70 ${
          isSaved ? 'text-yellow-400' : 'text-white'
        }`}>
          <Bookmark className={`h-6 w-6 ${isSaved ? 'fill-current' : ''}`} />
        </div>
        <span className="mt-1 text-sm text-white">Save</span>
      </button>

      <button className="group flex flex-col items-center">
        <div className="rounded-full bg-black/50 p-3 text-white transition-colors group-hover:bg-black/70">
          <Share2 className="h-6 w-6" />
        </div>
        <span className="mt-1 text-sm text-white">Share</span>
      </button>

      <button 
        onClick={() => onAddToCart(productId)}
        className="group flex flex-col items-center"
      >
        <div className="rounded-full bg-green-500 p-3 text-white transition-colors group-hover:bg-green-600">
          <ShoppingCart className="h-6 w-6" />
        </div>
        <span className="mt-1 text-sm text-white">Buy</span>
      </button>
    </div>
  );
}