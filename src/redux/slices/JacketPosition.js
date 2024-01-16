import { createSlice } from "@reduxjs/toolkit";

const jacketPositionSlice = createSlice({
	name: "jacketPosition",
	initialState: { x: 0, y: 0 },
	reducers: {
		setJacketPosition: (state, action) => {
			return action.payload;
		},
		resetJacketPosition: (state) => {
			return { x: 0, y: 0 };
		},
	},
});

export const { setJacketPosition, resetJacketPosition } = jacketPositionSlice.actions;
export default jacketPositionSlice.reducer;
