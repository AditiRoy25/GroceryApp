// // "use client";
// // import { useSelector, useDispatch } from "react-redux";
// // import { RootState } from "@/redux/store";
// // import { Box, Typography, Button, TextField } from "@mui/material";
// // import { removeFromCart, undo } from "@/redux/slices/cartSlice";
// // import { applyCoupon } from "@/redux/slices/couponSlice";

// // export default function CartSummary() {
// //   const dispatch = useDispatch();
// //   const items = useSelector((s: RootState) => s.cart.items);
// //   const discount = useSelector((s: RootState) => s.coupon.discount);

// //   const total = items.reduce((s, i) => s + i.price, 0);
// //   const thresholdDiscount = total > 500 ? total * 0.1 : 0;
// //   const couponDiscount = (total * discount) / 100;
// //   const finalPrice = total - thresholdDiscount - couponDiscount;

// //   return (
// //     <Box p={3}>
// //       <Typography variant="h5">Cart</Typography>

// //       {items.map(i => (
// //         <Box key={i.id} display="flex" justifyContent="space-between">
// //           <Typography>{i.name}</Typography>
// //           <Button onClick={() => dispatch(removeFromCart(i.id))}>Remove</Button>
// //         </Box>
// //       ))}

// //       <TextField label="Coupon" onBlur={(e) => dispatch(applyCoupon(e.target.value))} />

// //       <Typography>Total: ₹{total}</Typography>
// //       <Typography>Final: ₹{finalPrice}</Typography>

// //       <Button color="warning" onClick={() => dispatch(undo())}>
// //         Undo Last Action
// //       </Button>
// //     </Box>
// //   );
// // }



// "use client";

// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";
// import {
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Divider,
// } from "@mui/material";
// import { removeFromCart, undo } from "@/redux/slices/cartSlice";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CartSummary() {
//   const dispatch = useDispatch();
//   const items = useSelector((s: RootState) => s.cart.items);

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Cart
//       </Typography>

//       <AnimatePresence>
//         {items.map((item) => (
//           <motion.div
//             key={item.id}
//             layout
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Card
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 mb: 2,
//                 height: 120,          // ✅ same size
//               }}
//             >
//               {/* ✅ IMAGE */}
//               <CardMedia
//                 component="img"
//                 image={item.image}
//                 alt={item.name}
//                 sx={{
//                   width: 120,
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />

//               {/* CONTENT */}
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography fontWeight={600}>
//                   {item.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.category}
//                 </Typography>
//                 <Typography variant="h6">
//                   ₹{item.price}
//                 </Typography>
//               </CardContent>

//               {/* ACTION */}
//               <Box pr={2}>
//                 <Button
//                   color="error"
//                   variant="outlined"
//                   onClick={() => dispatch(removeFromCart(item.id))}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Card>
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       <Divider sx={{ mt: 2 }} />

//       <Button
//         sx={{ mt: 2 }}
//         color="warning"
//         variant="outlined"
//         onClick={() => dispatch(undo())}
//       >
//         Undo Last Action
//       </Button>
//     </Box>
//   );
// }



// "use client";

// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Button,
//   Divider,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import {
//   addToCart,
//   decrementQuantity,
//   removeFromCart,
//   undo,
// } from "@/redux/slices/cartSlice";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CartSummary() {
//   const dispatch = useDispatch();
//   const items = useSelector((state: RootState) => state.cart.items);

//   const total = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <Box>
//       <Typography variant="h5" mb={2}>
//         Cart
//       </Typography>

//       <AnimatePresence>
//         {items.map((item) => (
//           <motion.div
//             key={item.id}
//             layout
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, x: -40 }}
//             transition={{ duration: 0.25 }}
//           >
//             <Card
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 mb: 2,
//                 height: 120, // ✅ SAME HEIGHT
//               }}
//             >
//               {/* IMAGE */}
//               <CardMedia
//                 component="img"
//                 image={item.image}
//                 alt={item.name}
//                 sx={{
//                   width: 120,
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />

//               {/* CONTENT */}
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography fontWeight={600}>
//                   {item.name}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary">
//                   ₹{item.price} × {item.quantity}
//                 </Typography>

//                 <Typography fontWeight={600}>
//                   Total: ₹{item.price * item.quantity}
//                 </Typography>
//               </CardContent>

//               {/* QUANTITY CONTROLS */}
//               <Box display="flex" alignItems="center" gap={1}>
//                 <IconButton
//                   onClick={() =>
//                     dispatch(decrementQuantity(item.id))
//                   }
//                 >
//                   <RemoveIcon />
//                 </IconButton>

//                 <Typography>{item.quantity}</Typography>

//                 <IconButton
//                   onClick={() => dispatch(addToCart(item))}
//                 >
//                   <AddIcon />
//                 </IconButton>
//               </Box>

//               {/* REMOVE */}
//               <Box pr={2}>
//                 <Button
//                   color="error"
//                   variant="outlined"
//                   onClick={() =>
//                     dispatch(removeFromCart(item.id))
//                   }
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Card>
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       <Divider sx={{ my: 2 }} />

//       <Typography variant="h6">
//         Grand Total: ₹{total}
//       </Typography>

//       <Button
//         variant="outlined"
//         color="warning"
//         sx={{ mt: 2 }}
//         onClick={() => dispatch(undo())}
//       >
//         Undo Last Action
//       </Button>
//     </Box>
//   );
// }




"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
  undo,
} from "@/redux/slices/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import CouponInput from "@/components/cart/CouponInput";

export default function CartSummary() {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);

  // ✅ COUPON DISCOUNT FROM REDUX
  const discount = useSelector(
    (state: RootState) => state.coupon.discount
  );

  // ✅ PRICE CALCULATIONS
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const couponDiscount = (subtotal * discount) / 100;
  const finalTotal = subtotal - couponDiscount;

  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Cart
      </Typography>

      {/* CART ITEMS */}
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                height: 120,
              }}
            >
              {/* IMAGE */}
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  width: 120,
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography fontWeight={600}>
                  {item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  ₹{item.price} × {item.quantity}
                </Typography>

                <Typography fontWeight={600}>
                  Total: ₹{item.price * item.quantity}
                </Typography>
              </CardContent>

              {/* QUANTITY CONTROLS */}
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                  onClick={() =>
                    dispatch(decrementQuantity(item.id))
                  }
                >
                  <RemoveIcon />
                </IconButton>

                <Typography>{item.quantity}</Typography>

                <IconButton
                  onClick={() => dispatch(addToCart(item))}
                >
                  <AddIcon />
                </IconButton>
              </Box>

              {/* REMOVE */}
              <Box pr={2}>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Remove
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      <Divider sx={{ my: 2 }} />

      {/* COUPON INPUT */}
      <CouponInput />

      {/* PRICE SUMMARY */}
      <Box mt={2}>
        <Typography>
          Subtotal: ₹{subtotal}
        </Typography>

        {discount > 0 && (
          <Typography color="success.main">
            Coupon Discount ({discount}%): -₹{couponDiscount}
          </Typography>
        )}

        <Typography variant="h6" mt={1}>
          Grand Total: ₹{finalTotal}
        </Typography>
      </Box>

      {/* UNDO */}
      <Button
        variant="outlined"
        color="warning"
        sx={{ mt: 2 }}
        onClick={() => dispatch(undo())}
      >
        Undo Last Action
      </Button>
    </Box>
  );
}
