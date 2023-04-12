import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/Constans";


export const getInitialpokemonData = createAsyncThunk("pokemon/initialData",async()=> {
    try 
    {
        const { data } = await axios.get(pokemonsRoute);
        return data.results;

    } 
    catch (err) 
    {
        console.log('err->',err);
    }
})