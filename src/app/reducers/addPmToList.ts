import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatesInFACE, pokemonTYPE, userPokemonsTYPE } from "../../utils/Types";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { getUserPokemons } from "./getUserPokemons";
// import { getUserPokemons } from "./getUserPokemons";

export const addPmToList = createAsyncThunk( "pokemon/addPokemon",async ( pokemon :
  {
    id: number;
    name: string;
    types: pokemonTYPE[] | string[];
      states?: pokemonStatesInFACE[];
  }, { getState, dispatch }
  ) => 
  {
    try
    {
      const {
        app : { userInfo },
        pokemon : { userPokemons },
      } = getState() as RootState;

      if(!userInfo?.email)
      {
        return dispatch(setToast("Please login in order to add pokemon to your collection."));
      }

      const index = userPokemons.findIndex( (userpokemon:userPokemonsTYPE)=>
      {
        return userpokemon.name === pokemon.name;
      });

      if(index === -1)
      {
        let types: string[] = [];

        // here we stuck // types = pokemon.types as string[];
        if(!pokemon.states)
        {
          pokemon.types.forEach((type: any) => types.push(Object.keys(type).toString()));
        }
        else
        {
          types = pokemon.types as string[];
        }

        await addDoc( pokemonListRef, 
          { 
            pokemon: {id: pokemon.id, name: pokemon.name, types},
            email : userInfo.email
          } );
        await dispatch(getUserPokemons()); //
        dispatch( setToast( `${pokemon.name} added to your Collection.` ) );
      }
      else
      {
        dispatch(setToast(`${pokemon.name} already part of your Collection.`));
      }
    }
    catch(er)
    {
      console.log(er);
    }
  }
);