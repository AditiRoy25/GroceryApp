import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import couponReducer from "./slices/couponSlice";
import wishlistReducer from "./slices/wishlistSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    coupon: couponReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
