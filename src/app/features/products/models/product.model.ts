export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
  description: string;
  category: string;
  isWishlisted?: boolean;
  addedToCart?: boolean;
}
