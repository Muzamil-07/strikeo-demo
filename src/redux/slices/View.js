import { createSlice } from "@reduxjs/toolkit";

const ViewSlice = createSlice({
	name: "isVendorView",
	initialState: { enabled: false },
	reducers: {
		setView: (state, action) => {
			return action.payload;
		},
	},
});

export const { setView } = ViewSlice.actions;
export default ViewSlice.reducer;
