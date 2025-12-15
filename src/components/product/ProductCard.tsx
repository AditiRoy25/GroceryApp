// // "use client";

// // import {
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   Typography,
// //   Button,
// //   Box,
// //   IconButton,
// //   Rating,
// // } from "@mui/material";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import EditIcon from "@mui/icons-material/Edit";
// // import { Product } from "@/types/product";
// // import { useDispatch } from "react-redux";
// // import { addToCart } from "@/redux/slices/cartSlice";

// // export default function ProductCard({ product }: { product: Product }) {
// //   const dispatch = useDispatch();

// //   return (
// //     <Card
// //       sx={{
// //         height: "100%",
// //         display: "flex",
// //         flexDirection: "column",
// //         position: "relative",
// //         transition: "0.3s",
// //         "&:hover": {
// //           transform: "translateY(-4px)",
// //           boxShadow: 6,
// //         },
// //       }}
// //     >
     
// //       <Box
// //         sx={{
// //           position: "absolute",
// //           top: 8,
// //           right: 8,
// //           display: "flex",
// //           gap: 1,
// //           zIndex: 2,
// //         }}
// //       >
// //         <IconButton
// //           size="small"
// //           sx={{ backgroundColor: "white" }}
// //           onClick={() => console.log("Wishlist:", product.id)}
// //         >
// //           <FavoriteBorderIcon fontSize="small" />
// //         </IconButton>

// //         <IconButton
// //           size="small"
// //           sx={{ backgroundColor: "white" }}
// //           onClick={() => console.log("Edit:", product.id)}
// //         >
// //           <EditIcon fontSize="small" />
// //         </IconButton>
// //       </Box>

      
// //       <CardMedia
// //         component="img"
// //         height="180"
// //         image={product.image}
// //         alt={product.name}
// //       />

      
// //       <CardContent sx={{ flexGrow: 1 }}>
// //         <Typography variant="subtitle1" fontWeight={600}>
// //           {product.name}
// //         </Typography>

// //         <Typography variant="body2" color="text.secondary">
// //           Category: {product.category}
// //         </Typography>

       
// //         <Rating value={4} readOnly size="small" sx={{ mt: 1 }} />

// //         <Typography variant="h6" mt={1}>
// //           ₹{product.price}
// //         </Typography>
// //       </CardContent>

     
// //       <Box p={2}>
// //         <Button
// //           fullWidth
// //           variant="contained"
// //           onClick={() => dispatch(addToCart(product))}
// //         >
// //           Add to Cart
// //         </Button>
// //       </Box>
// //     </Card>
// //   );
// // }



// "use client";

// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Rating,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import EditIcon from "@mui/icons-material/Edit";
// import { Product } from "@/types/product";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/slices/cartSlice";
// import { motion } from "framer-motion";

// const MotionCard = motion(Card);

// export default function ProductCard({ product }: { product: Product }) {
//   const dispatch = useDispatch();

//   return (
//     <MotionCard
//       layout
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25 }}
//       sx={{
//         height: 400, 
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//       }}
//     >
     
//       <Box
//         sx={{
//           position: "absolute",
//           top: 8,
//           right: 8,
//           display: "flex",
//           gap: 1,
//           zIndex: 2,
//         }}
//       >
//         <IconButton size="small" sx={{ bgcolor: "white" }}>
//           <FavoriteBorderIcon fontSize="small" />
//         </IconButton>
//         <IconButton size="small" sx={{ bgcolor: "white" }}>
//           <EditIcon fontSize="small" />
//         </IconButton>
//       </Box>

//       {/* IMAGE — SAME RATIO ALWAYS */}
//       <CardMedia
//         component="img"
//         image={product.image}
//         alt={product.name}
//         sx={{
//           height: 160,          
//           objectFit: "cover",
//         }}
//       />

//       {/* CONTENT — LOCKED HEIGHT */}
//       <CardContent
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           minHeight: 100,       // ✅ IMPORTANT
//         }}
//       >
//         {/* TITLE — MAX 2 LINES */}
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           sx={{
//             display: "-webkit-box",
//             WebkitLineClamp: 2, // ✅ max 2 lines
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             minHeight: 40,      // ✅ equal title space
//           }}
//         >
//           {product.name}
//         </Typography>

//         <Typography variant="body2" color="text.secondary">
//           {product.category}
//         </Typography>

//         <Rating value={4} size="small" readOnly sx={{ mt: 0.5 }} />

//         {/* PRICE ALWAYS AT SAME SPOT */}
//         <Typography variant="h6" sx={{ mt: "auto" }}>
//           ₹{product.price}
//         </Typography>
//       </CardContent>

//       {/* BUTTON — FIXED HEIGHT */}
//       <Box sx={{ p: 2 }}>
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{ height:30 }}   // ✅ same button height
//           onClick={() => dispatch(addToCart(product))}
//         >
//           ADD TO CART
//         </Button>
//       </Box>
//     </MotionCard>
//   );
// }



// "use client";

// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Rating,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import EditIcon from "@mui/icons-material/Edit";
// import { Product } from "@/types/product";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/slices/cartSlice";
// import { motion } from "framer-motion";

// const MotionCard = motion(Card);

// export default function ProductCard({ product }: { product: Product }) {
//   const dispatch = useDispatch();

//   return (
//     <MotionCard
//       layout
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25 }}
//       sx={{
//         height: 400,                 // ✅ SAME HEIGHT
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//       }}
//     >
//       {/* TOP ICONS */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 8,
//           right: 8,
//           display: "flex",
//           gap: 1,
//           zIndex: 2,
//         }}
//       >
//         <IconButton size="small" sx={{ bgcolor: "white" }}>
//           <FavoriteBorderIcon fontSize="small" />
//         </IconButton>
//         {/* <IconButton size="small" sx={{ bgcolor: "white" }}>
//           <EditIcon fontSize="small" />
//         </IconButton> */}
//       </Box>

//       {/* IMAGE */}
//       <CardMedia
//         component="img"
//         image={product.image}
//         alt={product.name}
//         sx={{
//           height: 160,
//           objectFit: "cover",
//         }}
//       />

//       {/* CONTENT */}
//       <CardContent
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           minHeight: 110,
//         }}
//       >
//         {/* TITLE – MAX 2 LINES */}
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           sx={{
//             display: "-webkit-box",
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             minHeight: 44,
//           }}
//         >
//           {product.name}
//         </Typography>

//         <Typography variant="body2" color="text.secondary">
//           {product.category}
//         </Typography>

//         <Rating value={4} size="small" readOnly sx={{ mt: 0.5 }} />

//         {/* PRICE FIXED AT BOTTOM */}
//         <Typography variant="h6" sx={{ mt: "auto" }}>
//           ₹{product.price}
//         </Typography>
//       </CardContent>

//       {/* BUTTON */}
//       <Box sx={{ p: 2 }}>
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{ height: 40 }}
//           onClick={() => dispatch(addToCart(product))}
//         >
//           ADD TO CART
//         </Button>
//       </Box>
//     </MotionCard>
//   );
// }



"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product } from "@/types/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { toggleWishlist } from "@/redux/slices/wishlistSlice";
import { RootState } from "@/redux/store";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.items
  );

 
  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  return (
    <MotionCard
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      sx={{
        height: 400,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          display: "flex",
          gap: 1,
          zIndex: 2,
        }}
      >
       
        <IconButton
          size="small"
          sx={{ bgcolor: "white" }}
          onClick={() => dispatch(toggleWishlist(product))}
        >
          {isWishlisted ? (
            <FavoriteIcon color="error" fontSize="small" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </IconButton>
      </Box>

      
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 160,
          objectFit: "cover",
        }}
      />

      
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 110,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: 44,
          }}
        >
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>

        <Rating value={4} size="small" readOnly sx={{ mt: 0.5 }} />

        <Typography variant="h6" sx={{ mt: "auto" }}>
          ₹{product.price}
        </Typography>
      </CardContent>

      
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{ height: 40 }}
          onClick={() => dispatch(addToCart(product))}
        >
          ADD TO CART
        </Button>
      </Box>
    </MotionCard>
  );
}
