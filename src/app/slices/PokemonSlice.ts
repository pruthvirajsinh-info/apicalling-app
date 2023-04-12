import { createSlice } from "@reduxjs/toolkit";
import { PmTypeInitSTATE } from "../../utils/Types";
import { getInitialpokemonData } from "../reducers/getInitialpokemonData";
import { getpokemonData } from "../reducers/getPokemonData";

const initialState: PmTypeInitSTATE =
{
    allPokemon: undefined,
    randomPokemons: undefined,
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(getInitialpokemonData.fulfilled, (state,action)=>{
            state.allPokemon = action.payload;
        } );
        builder.addCase(getpokemonData.fulfilled, (state, action)=>{
            state.randomPokemons = action.payload;
        })
    }
});

export const { } = PokemonSlice.actions;