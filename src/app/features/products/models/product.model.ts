export interface Product {
  id: number;
  title: string;
  price: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  image: string;
  images?: string[];
  rating: number;
  ratingCount: number;
  description: string;
  colors?: string[];
  sizes?: string[];
  quantity?: number;
  isWishlisted?: boolean;
}
