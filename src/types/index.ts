export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    avatar: string;
    isLive?: boolean;
  };
  likes: number;
  comments: number;
  isLiked: boolean;
  isSaved: boolean;
  category: string;
  tags: string[];
  isEco?: boolean;
  isLocal?: boolean;
  stock: number;
  shipping: {
    express: boolean;
    price: number;
    estimatedDays: number;
  };
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  points: number;
  following: string[];
  cart: CartItem[];
  wishlist: string[];
  achievements: Achievement[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  productId: string;
  text: string;
  rating: number;
  images?: string[];
  likes: number;
  createdAt: string;
}