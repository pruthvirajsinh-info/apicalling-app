import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PokemonCardGrid from "../../components/PokemonCardGrid";
import { getpokemonData } from "../../app/reducers/getPokemonData";
import { genericPokemonTYPE } from "../../utils/Types";
//@ts-ignore
import Loader from "../../components/Loader";

function Evolution() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useAppDispatch();
	const pokemonData = useAppSelector(({ pokemon }) => pokemon);
	useEffect(() => {
		const fetchData = async () => {
			const pokemons: genericPokemonTYPE[] = pokemonData.currentPokemon!.evolution.map(
				({ pokemon }: { pokemon: genericPokemonTYPE }) => pokemon
			);
			await dispatch(getpokemonData(pokemons));
			setIsLoaded(true);
		};
		fetchData();
	}, [dispatch, pokemonData.currentPokemon]);

	return (
		<div className="page">
			{isLoaded ? (
				<PokemonCardGrid pokemons={pokemonData.randomPokemons!} />
			) : (
				<Loader />
			)}
		</div>
	);
}

export default Evolution;
