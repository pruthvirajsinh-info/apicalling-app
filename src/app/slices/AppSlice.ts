import { createSlice } from "@reduxjs/toolkit";
import { AppSliceInitTYPE } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constans";

const initialState: AppSliceInitTYPE = {
	toasts: [],
	userInfo: undefined,
	crntPokemonTab: pokemonTabs.description,
};

export const AppSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setToast: (state, action) => {
			const toasts = [...state.toasts];
			toasts.push(action.payload);
			state.toasts = toasts;
		},

		clearToasts: (state) => {
			state.toasts = [];
		},

		setUserStatus: (state, action) => {
			state.userInfo = action.payload;
		},

		setPokemonTab: (state, action) => {
			state.crntPokemonTab = action.payload;
		},
	},
});

export const { setToast, clearToasts, setUserStatus,setPokemonTab } = AppSlice.actions;
