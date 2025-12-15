// "use client";

// import { Box, Typography, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const slides = [
//   {
//     id: 1,
//     title: "Fresh Groceries Delivered",
//     image:
//       "https://img.freepik.com/free-photo/view-allergens-commonly-found-grains_23-2150170288.jpg?semt=ais_hybrid&w=740&q=80",
//   },
//   {
//     id: 2,
//     title: "Organic Fruits & Vegetables",
//     image:
//       "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=60",
//   },
//   {
//     id: 3,
//     title: "Daily Essentials at Best Price",
//     image:
//       "https://www.shutterstock.com/image-photo/bright-playful-scene-opened-blue-600nw-2642043075.jpg",
//   },
// ];

// export default function HomePage() {
//   return (
//     <Box>
//       {slides.map((slide) => (
//         <Box
//           key={slide.id}
//           sx={{
//             height: 300,
//             borderRadius: 2,
//             mb: 3,
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               backgroundColor: "rgba(0,0,0,0.4)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//               textAlign: "center",
//             }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography variant="h4" fontWeight={700}>
//                 {slide.title}
//               </Typography>

//               <Button
//                 component={Link}
//                 href="/products"
//                 variant="contained"
//                 sx={{ mt: 2 }}
//               >
//                 Shop Now
//               </Button>
//             </motion.div>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// }




"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Fresh Groceries Delivered",
    image:
      "https://img.freepik.com/free-photo/view-allergens-commonly-found-grains_23-2150170288.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Organic Fruits & Vegetables",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: 3,
    title: "Daily Essentials at Best Price",
    image:
      "https://www.shutterstock.com/image-photo/bright-playful-scene-opened-blue-600nw-2642043075.jpg",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* CAROUSEL */}
      <Box
        sx={{
          position: "relative",
          height: 350,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${slides[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                px: 2,
              }}
            >
              <Typography variant="h4" fontWeight={700}>
                {slides[index].title}
              </Typography>

              <Button
                component={Link}
                href="/products"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Shop Now
              </Button>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* DOT INDICATORS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          gap: 1,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: i === index ? "primary.main" : "grey.400",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
