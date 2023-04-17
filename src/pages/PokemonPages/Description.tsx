import Info from "../../components/Info";
import PokemonContainer from "../../components/PokemonContainer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import { setLoading } from "../../app/slices/AppSlice";

function Description() {
	const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);
	const dispatch = useAppDispatch();
	const pokemonData = useAppSelector(
		({ pokemon: { currentPokemon } }) => currentPokemon
	);

	useEffect(() => {
		if (pokemonData) {
			dispatch(setLoading(false));
		}
	}, [pokemonData, dispatch]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{<Loader /> && pokemonData && <Info data={pokemonData} />}
					{pokemonData && <PokemonContainer image={pokemonData.image!} />}
				</div>
			)}
		</>
	);
}

export default Description;
