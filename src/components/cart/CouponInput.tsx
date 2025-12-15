"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, clearCoupon } from "@/redux/slices/couponSlice";
import { RootState } from "@/redux/store";

export default function CouponInput() {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const { discount, error } = useSelector(
    (state: RootState) => state.coupon
  );

  return (
    <Box mt={2}>
      <Typography fontWeight={600} mb={1}>
        Apply Coupon
      </Typography>

      <Box display="flex" gap={1}>
        <TextField
          size="small"
          placeholder="Enter coupon code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={() => dispatch(applyCoupon(code))}
        >
          Apply
        </Button>

        {discount > 0 && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => dispatch(clearCoupon())}
          >
            Remove
          </Button>
        )}
      </Box>

      {discount > 0 && (
        <Typography color="success.main" mt={1}>
          Coupon applied: {discount}% OFF
        </Typography>
      )}

      {error && (
        <Typography color="error" mt={1}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
