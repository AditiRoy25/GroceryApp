import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface ProductState {
  list: Product[];
  search: string;
  category: string;
  sort: "asc" | "desc";
}

const initialState:ProductState = {
  list: [
    {
      id: 1,
      name: "Apple (Fresh)",
      price: 120,
      category: "Fruit",
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Banana (Organic)",
      price: 80,
      category: "Fruit",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
    },
    {
      id: 3,
      name: "Orange",
      price: 100,
      category: "Fruit",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=60",
    },

    {
      id: 4,
      name: "Milk (1L Packet)",
      price: 60,
      category: "Dairy",
      image:
        "https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg",
    },
    {
      id: 5,
      name: "Cheese Block",
      price: 250,
      category: "Dairy",
      image:
        "https://www.instacart.com/company/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblta100b44b847ff4ca%2Fblt4f220d2d2d8761d7%2F68dc4b6b003e1a792b31673f%2Ftypes-of-cheese-hero.webp&w=3840&q=75",
    },
    {
      id: 6,
      name: "Butter",
      price: 180,
      category: "Dairy",
      image:
        "https://www.shutterstock.com/image-photo/fresh-butter-slices-on-wooden-600nw-2568593227.jpg",
    },

    {
      id: 7,
      name: "Rice (Basmati 5kg)",
      price: 550,
      category: "Grain",
      image:
        "https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc=",
    },
    {
      id: 8,
      name: "Wheat Flour (Atta)",
      price: 420,
      category: "Grain",
      image:
        "https://i0.wp.com/pam-main-website-media.s3.amazonaws.com/wp-content/uploads/2024/03/06110226/Wheat-Flour.jpg?fit=1200%2C800&ssl=1",
    },
    {
      id: 9,
      name: "Lentils (Dal)",
      price: 300,
      category: "Grain",
      image:
        "https://t3.ftcdn.net/jpg/09/54/72/48/360_F_954724810_aS7WOxxFluomPeqcw7IqxzyKHOoOO5FM.jpg",
    },
  ],
  search: "",
  category: "All",
  sort: "asc",
};


// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setSearch: (s, a: PayloadAction<string>) => { s.search = a.payload },
//     setCategory: (s, a: PayloadAction<string>) => { s.category = a.payload },
//     setSort: (s, a: PayloadAction<"asc" | "desc">) => { s.sort = a.payload },
//   },
// });


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<"asc" | "desc">) {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSort } = productSlice.actions;
export default productSlice.reducer;
