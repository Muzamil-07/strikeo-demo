import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
	name: "theme",
	initialState: { mode: localStorage.getItem("theme") || "dark" },
	reducers: {
		toggleTheme: (state) => {
			state.mode = state.mode === "dark" ? "light" : "dark";
			localStorage.setItem("theme", state.mode);
		},
		refreshTheme: (state) => {
			if (!localStorage.getItem("theme")) {
				localStorage.setItem("theme", "dark");
			}
		},
	},
});

export const { toggleTheme, refreshTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
