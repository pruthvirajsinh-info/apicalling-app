import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

export const rmvPokemon = createAsyncThunk("pokemon/remove", async ({ id }: { id: string }) => 
{
  try
  {
    await deleteDoc(doc(pokemonListRef, id));
    return {id};
  }
  catch(er)
  {
    console.log(er)
  }

})