// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const coupons: Record<string, number> = {
//   SAVE10: 10,
//   SAVE20: 20,
// };

// const couponSlice = createSlice({
//   name: "coupon",
//   initialState: { discount: 0 },
//   reducers: {
//     applyCoupon(state, action: PayloadAction<string>) {
//       state.discount = coupons[action.payload] || 0;
//     },
//   },
// });

// export const { applyCoupon } = couponSlice.actions;
// export default couponSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CouponState {
  code: string | null;
  discount: number; // percentage
  error: string | null;
}

const validCoupons: Record<string, number> = {
  SAVE10: 10,
  SAVE20: 20,
  GROCERY5: 5,
};

const initialState: CouponState = {
  code: null,
  discount: 0,
  error: null,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon(state, action: PayloadAction<string>) {
      const code = action.payload.toUpperCase();

      if (validCoupons[code]) {
        state.code = code;
        state.discount = validCoupons[code];
        state.error = null;
      } else {
        state.code = null;
        state.discount = 0;
        state.error = "Invalid coupon code";
      }
    },

    clearCoupon(state) {
      state.code = null;
      state.discount = 0;
      state.error = null;
    },
  },
});

export const { applyCoupon, clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;
