// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "@/types/product";

// interface CartState {
//   items: Product[];
//   history: Product[][];
// }

// const initialState: CartState = {
//   items: [],
//   history: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<Product>) {
//       state.history.push([...state.items]);
//       state.items.push(action.payload);
//     },
//     removeFromCart(state, action: PayloadAction<number>) {
//       state.history.push([...state.items]);
//       state.items = state.items.filter(i => i.id !== action.payload);
//     },
//     undo(state) {
//       if (state.history.length) {
//         state.items = state.history.pop()!;
//       }
//     },
//     setCart(state, action: PayloadAction<Product[]>) {
//       state.items = action.payload;
//     },
//   },
// });

// export const { addToCart, removeFromCart, undo, setCart } = cartSlice.actions;
// export default cartSlice.reducer;




// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "@/types/product";

// // 👇 extend Product ONLY for cart
// type CartItem = Product & { quantity: number };

// interface CartState {
//   items: CartItem[];
//   history: CartItem[][];
// }

// const initialState: CartState = {
//   items: [],
//   history: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<Product>) {
//       state.history.push(JSON.parse(JSON.stringify(state.items)));

//       const existing = state.items.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.items.push({
//           ...action.payload,
//           quantity: 1,
//         });
//       }
//     },

//     decrementQuantity(state, action: PayloadAction<number>) {
//       state.history.push(JSON.parse(JSON.stringify(state.items)));

//       const item = state.items.find((i) => i.id === action.payload);
//       if (!item) return;

//       if (item.quantity > 1) {
//         item.quantity -= 1;
//       } else {
//         state.items = state.items.filter(
//           (i) => i.id !== action.payload
//         );
//       }
//     },

//     removeFromCart(state, action: PayloadAction<number>) {
//       state.history.push(JSON.parse(JSON.stringify(state.items)));
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );
//     },

//     undo(state) {
//       if (state.history.length > 0) {
//         state.items = state.history.pop()!;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   decrementQuantity,
//   removeFromCart,
//   undo,
// } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { saveCart, loadCart } from "@/utils/localStorage";

// Extend Product for cart
export type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
  history: CartItem[][];
}

const initialState: CartState = {
  items: typeof window !== "undefined" ? loadCart() : [],
  history: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.history.push(JSON.parse(JSON.stringify(state.items)));

      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      saveCart(state.items);
    },

    decrementQuantity(state, action: PayloadAction<number>) {
      state.history.push(JSON.parse(JSON.stringify(state.items)));

      const item = state.items.find(i => i.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }

      saveCart(state.items);
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.history.push(JSON.parse(JSON.stringify(state.items)));

      state.items = state.items.filter(
        item => item.id !== action.payload
      );

      saveCart(state.items);
    },

    undo(state) {
      if (state.history.length > 0) {
        state.items = state.history.pop()!;
        saveCart(state.items);
      }
    },

    clearCart(state) {
      state.items = [];
      saveCart([]);
    },
  },
});

/* ✅ THIS EXPORT IS REQUIRED */
export const {
  addToCart,
  decrementQuantity,
  removeFromCart,
  undo,
  clearCart,
} = cartSlice.actions;

/* ✅ DEFAULT EXPORT */
export default cartSlice.reducer;
