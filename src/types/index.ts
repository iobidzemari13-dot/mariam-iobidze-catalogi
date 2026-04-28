export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
  rating?: number;
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}