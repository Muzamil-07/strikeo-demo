import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	country: "",
	address: "",
	city: "",
	state: "",
	zipCode: "",
	phone: "",
	instruction: "",
};

export const BillingSlice = createSlice({
	name: "billing",
	initialState,
	reducers: {
		setBillingAddress: (state, action) => {
			return { ...state, ...action.payload };
		},
		removeBillingAddress: (state) => {
			return { ...initialState };
		},
	},
});

export const { setBillingAddress, removeBillingAddress } = BillingSlice.actions;

export default BillingSlice.reducer;
