import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number; // ახალი ველი
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    decrementItem: (state, action: PayloadAction<number>) => { 
      const existing = state.items.find(item => item.id === action.payload);
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;