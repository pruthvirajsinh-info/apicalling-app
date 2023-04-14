import { createSlice } from "@reduxjs/toolkit";
import { AppSliceInitTYPE } from "../../utils/Types";

const initialState: AppSliceInitTYPE = 
{
    toasts: [],
    userInfo: undefined,
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

        clearToasts: (state) => 
        {
            state.toasts = [];
        },

        setUserStatus: (state, action) => 
        {
            state.userInfo = action.payload;
        },

    },
});

export const { setToast, clearToasts, setUserStatus } = AppSlice.actions;