// "use client";

// import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";

// const drawerWidth = 240;

// export default function Sidebar() {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       {/* Toolbar spacer to align with Navbar */}
//       <Toolbar />

//       <List>
//         {["Fruit", "Dairy", "Grain"].map((text) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// }



"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/redux/slices/productSlice";
import { RootState } from "@/redux/store";

const drawerWidth = 240;

const categories = ["All", "Fruit", "Dairy", "Grain"];

export default function Sidebar() {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.products.category
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {categories.map((cat) => (
          <ListItem key={cat} disablePadding>
            <ListItemButton
              selected={activeCategory === cat}     
              onClick={() => dispatch(setCategory(cat))} 
            >
              <ListItemText primary={cat} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
