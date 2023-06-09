import { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialpokemonData } from "../app/reducers/getInitialpokemonData";
import { getpokemonData } from "../app/reducers/getPokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import { debounce } from "../utils/Debounces";
import Loader from "../components/Loader";
import { setLoading } from "../app/slices/AppSlice";

const Search = () => {
	const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);

	const dispatch = useAppDispatch();

	const { allPokemon, randomPokemons } = useAppSelector(
		({ pokemon }) => pokemon
	);

	useEffect(() => {
		dispatch(getInitialpokemonData());
	}, [dispatch]);

	useEffect(() => {
		if (allPokemon) {
			const clonedPokemons = [...allPokemon];
			const randomPokemonId = clonedPokemons
				.sort(() => Math.random() - Math.random())
				.slice(0, 20);
			// console.log('randomPokemonId->',randomPokemonId);
			dispatch(getpokemonData(randomPokemonId));
		}
	}, [allPokemon, dispatch]);
	useEffect(() => {
		if (randomPokemons) {
			dispatch(setLoading(false));
		}
	}, [randomPokemons, dispatch]);

	const handleChange = debounce((value: string) => getpokemon(value), 300);

	const getpokemon = async (value: string) => {
		if (value.length) {
			const pokemons = allPokemon?.filter((pokemon) =>
				pokemon.name.includes(value.toLowerCase())
			);
			dispatch(getpokemonData(pokemons!));
		} else {
			const clonedPokemons = [...(allPokemon as [])];
			const randomPokemonId = clonedPokemons
				.sort(() => Math.random() - Math.random())
				.slice(0, 20);
			// console.log('randomPokemonId->',randomPokemonId);
			dispatch(getpokemonData(randomPokemonId));
		}
	};

	console.log("isLoading", isLoading);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="search">
					<input
						type="text"
						className="pokemon-searchbar"
						placeholder="Search Pokemon"
						onChange={(e) => handleChange(e.target.value)}
					/>
					<PokemonCardGrid pokemons={randomPokemons!} />
				</div>
			)}
		</>
	);
};

export default Wrapper(Search);
