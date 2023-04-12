import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitSTATE } from "../../utils/Types";

const initialState:AppTypeInitSTATE = 
{
    
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers:{},
});

export const {} = AppSlice.actions;