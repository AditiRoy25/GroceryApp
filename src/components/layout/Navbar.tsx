// "use client";

// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <AppBar
//       position="fixed"          // ✅ fixed navbar
//       sx={{
//         zIndex: (theme) => theme.zIndex.drawer + 1, // ✅ above sidebar
//       }}
//     >
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Grocery Store
//         </Typography>

//         <Button color="inherit" component={Link} href="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} href="/products">
//           Products
//         </Button>
//         <Button color="inherit" component={Link} href="/cart">
//           Cart
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }



// "use client";

// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <AppBar position="fixed" sx={{ zIndex: 1200 }}>
//       <Toolbar>
//         {/* PROJECT ICON / LOGO */}
//         <Typography
//           variant="h6"
//           component={Link}
//           href="/"                 // ✅ HOME NAVIGATION
//           sx={{
//             flexGrow: 1,
//             textDecoration: "none",
//             color: "inherit",
//             cursor: "pointer",
//           }}
//         >
//           🛒 Grocery Store
//         </Typography>

//         <Box>
//           <Button color="inherit" component={Link} href="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} href="/products">
//             Products
//           </Button>
//           <Button color="inherit" component={Link} href="/cart">
//             Cart
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }


"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Navbar() {
  // ✅ Cart item count (sum of quantities)
  const cartCount = useSelector(
    (state: RootState) =>
      state.cart.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
  );

  // ✅ Wishlist count
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );

  return (
    <AppBar position="fixed" sx={{ zIndex: 1200 }}>
      <Toolbar>
        {/* LOGO / PROJECT ICON */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          🛒 Grocery Store
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>

          <Button color="inherit" component={Link} href="/products">
            Products
          </Button>

          {/* WISHLIST ICON */}
          <IconButton
            color="inherit"
            component={Link}
            href="/wishlist"
          >
            <Badge badgeContent={wishlistCount} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>

          {/* CART ICON */}
          <IconButton
            color="inherit"
            component={Link}
            href="/cart"
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
