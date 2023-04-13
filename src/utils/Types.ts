export interface AppTypeInitSTATE {
    toasts: string[];
}

export interface PmTypeInitSTATE {
    allPokemon : undefined | genericPokemonTYPE[];
    randomPokemons: undefined | generatedPokemonTYPE[];
    compareQueue: generatedPokemonTYPE[];
}

export interface genericPokemonTYPE {
    name: string;
    url: string;
}

export interface generatedPokemonTYPE {
    name: string;
    id: number;
    image: string;
    types : pokemonTypeInterface[];
}  

export interface pokemonTypeInterface {
    [key : string] : {
        image: string;
        resistance: string[];
        strength : string[];
        weakness:string[];
        vulnerable: string[];
    }
} 

export interface userPokemonsType extends generatedPokemonTYPE {
    firebaseId? : string;
}