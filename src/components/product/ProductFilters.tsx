"use client";
import { Box, TextField, Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearch, setCategory, setSort } from "@/redux/slices/productSlice";

export default function ProductFilters() {
  const dispatch = useDispatch();

  return (
    <Box display="flex" gap={2} my={2}>
      <TextField label="Search" onChange={(e) => dispatch(setSearch(e.target.value))} />
      <Select defaultValue="All" onChange={(e) => dispatch(setCategory(e.target.value))}>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Fruit">Fruit</MenuItem>
        <MenuItem value="Dairy">Dairy</MenuItem>
        <MenuItem value="Grain">Grain</MenuItem>
      </Select>
      <Select defaultValue="asc" onChange={(e) => dispatch(setSort(e.target.value as any))}>
        <MenuItem value="asc">Low → High</MenuItem>
        <MenuItem value="desc">High → Low</MenuItem>
      </Select>
    </Box>
  );
}
