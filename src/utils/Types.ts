export interface AppSliceInitTYPE 
{ 
    toasts: string[];
    userInfo: undefined | { email: string };
}

export interface PokemonSliceInitTYPE 
{
    allPokemon : undefined | genericPokemonTYPE[];
    randomPokemons: undefined | generatedPokemonTYPE[];
    compareQueue: generatedPokemonTYPE[];
    userPokemons: userPokemonsTYPE[];
}

export interface genericPokemonTYPE 
{
    name: string;
    url: string;
}

export interface generatedPokemonTYPE 
{
    name: string;
    id: number;
    image: string;
    types : pokemonTYPE[];
}  

export interface pokemonTYPE 
{
    [key : string] : {
        image: string;
        resistance: string[];
        strength : string[];
        weakness:string[];
        vulnerable: string[];
    }
} 

export interface userPokemonsTYPE extends generatedPokemonTYPE 
{
    firebaseId? : string;
}

export type pokemonStateTYPE =
    | "vulnerable"
    | "weakness"
    | "strength"
    | "resistance";

export interface pokemonStatesInFACE 
{
    name: string;
    value: string;
}
