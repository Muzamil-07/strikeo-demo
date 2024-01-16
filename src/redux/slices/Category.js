import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
	name: "Category",
	initialState: { data: [], selectedCategory: null },
	reducers: {
		setCategories: (state, action) => {
			state.data = action.payload.categories;
			state.selectedCategory = action.payload.selectedCategory;
		},
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { setCategories, setSelectedCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
