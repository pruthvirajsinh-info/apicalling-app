import { createSlice } from "@reduxjs/toolkit";
import { PmTypeInitSTATE, generatedPokemonTYPE } from "../../utils/Types";
import { getInitialpokemonData } from "../reducers/getInitialpokemonData";
import { getpokemonData } from "../reducers/getPokemonData";

const initialState: PmTypeInitSTATE =
{
    allPokemon: undefined,
    randomPokemons: undefined,
    compareQueue: [],
};

export const PokemonSlice = createSlice(
{
    name: "pokemon",
    initialState,

    reducers: 
    {
        addToCompare: (state, action) => 
        {
            const index = state.compareQueue.findIndex(
                (pokemon:generatedPokemonTYPE)=>pokemon.id===action.payload.id);
            
            if (index === -1) 
            {
                if(state.compareQueue.length === 2)
                {
                    state.compareQueue.pop();
                }
                state.compareQueue.unshift(action.payload);
            }
        },

        removeFromCompare: (state, action) => 
        {
            const index = state.compareQueue.findIndex(
                (pokemon: generatedPokemonTYPE) => pokemon.id === action.payload.id);

            const queue = [...state.compareQueue];
            queue.splice(index, 1);
            state.compareQueue = queue;
        },
    }, 

    extraReducers: (builder) => 
    {
        builder.addCase(getInitialpokemonData.fulfilled, (state,action)=>
        {
            state.allPokemon = action.payload;
        } );

        builder.addCase(getpokemonData.fulfilled, (state, action)=>
        {
            state.randomPokemons = action.payload;
        })
    }
});

export const { addToCompare, removeFromCompare } = PokemonSlice.actions;