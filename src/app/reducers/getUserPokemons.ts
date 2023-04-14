import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getDocs, query, where } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { userPokemonsTYPE } from "../../utils/Types";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/getPokemonTypes";

export const getUserPokemons = createAsyncThunk("pokemon/userList", async(args, {getState})=>{
  try
  {
    const { app: { userInfo }, } = getState() as RootState;
    if(!userInfo?.email)
    {
      return;
    }
    const fireStoreQuery = query(pokemonListRef,where("email","==",userInfo.email));

    const fetchedPokemons = await getDocs(fireStoreQuery);
    if(fetchedPokemons.docs.length)
    {
      const userPokemons:userPokemonsTYPE[]= [];
      fetchedPokemons.forEach( async (pokemon) => 
      {
        const pokemons = await pokemon.data().pokemon;
        //@ts-ignore
        let image = images[pokemons.id];
        if(!image)
        {
          //  @ts-ignore
          image = defaultImages[pokemons.id];
        }

        const types = pokemons.types.map((name: string) => (
        {
          // @ts-ignore
          [name] : pokemonTypes[name],
        }));

        userPokemons.push(
        {
          ...pokemons,
          firebaseId:pokemon.id,
          image,
          types,
        });
      });
      console.log('userPokemons->',userPokemons);
      return userPokemons;
    }
    return [];
  }
  catch(er)
  {
    console.log(er)
  }
})