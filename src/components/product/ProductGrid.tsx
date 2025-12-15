"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { list, search, category, sort } = useSelector(
    (state: RootState) => state.products
  );

  const products = [...list]
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || p.category === category)
    )
    .sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
   <Grid container spacing={3} alignItems="stretch">
  {products.map((p) => (
    <Grid size={{ xs:12 ,sm:6 , md:4 }} key={p.id} sx={{ width: "60%", padding: 5}}>
      <Grid> 
      <ProductCard product={p}  />
    </Grid>
    </Grid>
  ))}
</Grid>

  );
}


