// src/types/index.ts

// 1. კატალოგის პროდუქტის მონაცემების სტრუქტურა
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean; // მარაგშია თუ არა
  rating?: number;  // ? ნიშნავს, რომ შეფასების ველი არასავალდებულოა
}

// 2. კატეგორიების სტრუქტურა (მთავარი და ქვეკატეგორიებისთვის)
export interface Category {
  id: number;
  name: string;
  icon?: string; // კატეგორიის ლოგო ან აიქონი (არასავალდებულო)
}

// 3. ნავიგაციის ლინკების სტრუქტურა (მენიუსთვის)
export interface NavLink {
  label: string;
  path: string;
}

// 4. საკონტაქტო ფორმის მონაცემების სტრუქტურა
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}