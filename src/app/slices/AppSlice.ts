import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitSTATE } from "../../utils/Types";

const initialState:AppTypeInitSTATE = 
{
    toasts: [],
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers:
    {
        setToast: (state,action) => 
        {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        clearToast: (state) => {
            state.toasts = [];
        },
    },
});

export const { setToast, clearToast } = AppSlice.actions;