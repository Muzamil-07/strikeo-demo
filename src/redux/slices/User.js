import { createSlice } from "@reduxjs/toolkit";
import http from "../../api";

const initialState = {
	isLoggedIn: false,
	details: null,
};

export const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			const { details, token } = action.payload;
			state.isLoggedIn = true;
			state.details = details;
			localStorage.setItem("token", token);
			http.refreshToken();
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.details = null;
			localStorage.removeItem("token");
			http.refreshToken();
		},
		setUser: (state, action) => {
			state.isLoggedIn = true;
			state.details = action.payload;
		},
	},
});

export const { login, logout, setUser } = UserSlice.actions;

export default UserSlice.reducer;
