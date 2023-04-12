import React,{useEffect} from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialpokemonData } from "../app/reducers/getInitialpokemonData";
import { getpokemonData } from "../app/reducers/getPokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";

const Search = () => 
{
  const dispatch = useAppDispatch();

  const {allPokemon, randomPokemons} = useAppSelector(({pokemon})=>pokemon);

  useEffect(() => 
  {
    dispatch(getInitialpokemonData());
    
  }, [dispatch]);

  useEffect(() => 
  {
    if(allPokemon)
    {
      const clonedPokemons = [...allPokemon];
      const randomPokemonId = clonedPokemons.sort( 
          () => Math.random() - Math.random()
        ).slice(0,20);
        // console.log('randomPokemonId->',randomPokemonId);
        dispatch(getpokemonData(randomPokemonId));
    }
    
  }, [allPokemon,dispatch]);

  return (
    <>
      <div className="search">
        <input type="text" className="pokemon-searchbar" placeholder="Search Pokemon"/>
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  )
};

export default Wrapper(Search);
