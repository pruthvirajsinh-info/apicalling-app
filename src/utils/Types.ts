export interface AppSliceInitTYPE {
	toasts: string[];
	userInfo: undefined | { email: string };
	crntPokemonTab: string;
}

export interface PokemonSliceInitTYPE {
	allPokemon: undefined | genericPokemonTYPE[];
	randomPokemons: undefined | generatedPokemonTYPE[];
	compareQueue: generatedPokemonTYPE[];
	userPokemons: userPokemonsTYPE[];
	currentPokemon: undefined | currentPokemonTYPE;
}

export interface currentPokemonTYPE {
	id: number;
	name: string;
	types: pokemonTYPE[];
	image: string;
	stats: pokemonStatesInFACE[];
	encounters: string[];
	evolutionLevel: number;
	evolution: { level: number; pokemon: { name: string; url: string } }[];
	pokemonAbilities: { abilities: string[]; moves: string[] };
}

export interface genericPokemonTYPE {
	name: string;
	url: string;
}

export interface generatedPokemonTYPE {
	name: string;
	id: number;
	image: string;
	types: pokemonTYPE[];
}

export interface pokemonTYPE {
	[key: string]: {
		image: string;
		resistance: string[];
		strength: string[];
		weakness: string[];
		vulnerable: string[];
	};
}

export interface userPokemonsTYPE extends generatedPokemonTYPE {
	firebaseId?: string;
}

export type pokemonStateTYPE =
	| "vulnerable"
	| "weakness"
	| "strength"
	| "resistance";

export interface pokemonStatesInFACE {
	name: string;
	value: string;
}

export type pokemonElementType =
	| "bug"
	| "dark"
	| "dragon"
	| "electric"
	| "fairy"
	| "fighting"
	| "fire"
	| "flying"
	| "ghost"
	| "grass"
	| "ground"
	| "ice"
	| "normal"
	| "poison"
	| "psychic"
	| "rock"
	| "steel"
	| "water";
