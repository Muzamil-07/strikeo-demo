import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
	name: "favourite",
	initialState: [],
	reducers: {
		setFavourites: (state, action) => {
			return action.payload;
		},
		addFavourite: (state, action) => {
			state.push(action.payload);
		},
		removeFavourite: (state, action) => {
			const index = action.payload;
			state.splice(index, 1);
		},
		resetFavourites: (state) => {
			return [];
		},
	},
});

export const { setFavourites, addFavourite, removeFavourite, resetFavourites } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
