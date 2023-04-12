import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonTYPE, genericPokemonTYPE } from "../../utils/Types";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { types } from "util";
import { pokemonTypes } from "../../utils/getPokemonTypes";

export const getpokemonData = createAsyncThunk("pokemon/randomPokemo", async (pokemons:genericPokemonTYPE[]) => {
    try {
        // console.log(pokemons,"from reducer");
        const pokemonsData:generatedPokemonTYPE[]  = [];

        for await (const pokemon of pokemons)
        {
            const {data} : 
            { 
                data: 
                {
                    id:number,
                    types: { type: generatedPokemonTYPE }[] //generatedPokemonTYPE[]; // {type:generatedPokemonTYPE}[]
                }
            } = await axios.get(pokemon.url);

            const types = data.types.map(
                ( { type: {name} } : {type: { name: string } } ) => 
                    ({ //@ts-expect-error
                        [name] : pokemonTypes[name],
                    })
            );

            // @ts-expect-error
            let image:string = images[data.id]

            if(!image)
            {
                // @ts-expect-error
                image=defaultImages[data.id];
            }else{
                // console.log("img not found", data.id);
            }

            if(image)
            {
                pokemonsData.push({
                    name: pokemon.name,
                    id: data.id,
                    image,
                    types,
                })
            }

            // console.log('data->',{data});
        }

        return pokemonsData;
    } 
    catch (err) 
    {
        console.log(err);
    }
})