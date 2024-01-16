import { createSlice } from "@reduxjs/toolkit";
import http from "../../api";

const initialState = {
	owner: null,
	items: [],
	bill: 0,
};

export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart: (state, action) => {
			return action.payload;
		},
	},
});

export const { setCart } = CartSlice.actions;

export default CartSlice.reducer;
