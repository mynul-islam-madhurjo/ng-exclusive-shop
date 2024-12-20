export interface Product {
  id: number;
  title: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  ratingCount: number;
  isInWishlist?: boolean;
}
