import { useAppDispatch } from "../app/hooks";
import {
	pokemonStateTYPE,
	pokemonTYPE,
	userPokemonsTYPE,
} from "../utils/Types";
import { FaPlus } from "react-icons/fa";
import { pokemonTypes } from "../utils/getPokemonTypes";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { useNavigate } from "react-router-dom";
import { addPmToList } from "../app/reducers/addPmToList";

const CompareContainer = ({
	pokemon = undefined,
	isEmpty = false,
}: {
	pokemon?: userPokemonsTYPE;
	isEmpty?: boolean;
}) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const createStatesAr = (
		types: pokemonTYPE[],
		stateType: pokemonStateTYPE
	) => {
		const statesAr: { name: string; image: string }[] = [];
		const statesSet = new Set<string>();

		types.forEach((type: pokemonTYPE) => {
			const key = Object.keys(type)[0];
			console.log("key->", key);

			type[key][stateType].forEach((state: string) => {
				if (!statesSet.has(state)) {
					// @ts-ignore
					statesAr.push({ name: state, image: pokemonTypes[state].image });
					statesSet.add(state);
				}
			});
		});
		return statesAr;
	};

	const getStats = () => {
		// const data= createStatesAr(pokemon?.types!, "strength");
		return (
			<>
				<div className="pokemon-types">
					<h4 className="pokemon-type-title">Stregth</h4>
					<div className="pokemon-type-icons">
						{createStatesAr(pokemon?.types!, "strength").map(
							(state: { image: string }) => (
								<div className="pokemon-type">
									<img
										src={state.image}
										alt="pokemon type"
										className="pokemon-type-image"
									/>
								</div>
							)
						)}
					</div>
				</div>

				<div className="pokemon-types">
					<h4 className="pokemon-type-title">Weakness</h4>
					<div className="pokemon-type-icons">
						{createStatesAr(pokemon?.types!, "weakness").map(
							(state: { image: string }) => (
								<div className="pokemon-type">
									<img
										src={state.image}
										alt="pokemon type"
										className="pokemon-type-image"
									/>
								</div>
							)
						)}
					</div>
				</div>

				<div className="pokemon-types">
					<h4 className="pokemon-type-title">Resistance</h4>
					<div className="pokemon-type-icons">
						{createStatesAr(pokemon?.types!, "resistance").map(
							(state: { image: string }) => (
								<div className="pokemon-type">
									<img
										src={state.image}
										alt="pokemon type"
										className="pokemon-type-image"
									/>
								</div>
							)
						)}
					</div>
				</div>

				<div className="pokemon-types">
					<h4 className="pokemon-type-title">Vulnerable</h4>
					<div className="pokemon-type-icons">
						{createStatesAr(pokemon?.types!, "vulnerable").map(
							(state: { image: string }) => (
								<div className="pokemon-type">
									<img
										src={state.image}
										alt="pokemon type"
										className="pokemon-type-image"
									/>
								</div>
							)
						)}
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="compare-container">
			{isEmpty && (
				<div className="empty">
					<button>
						<FaPlus />
					</button>
					<h3>Add Pokemon to Comparison</h3>
				</div>
			)}
			{pokemon && (
				<div className="compare-element">
					<div className="compare-info">
						<div className="compare-details">
							<h3>{pokemon?.name}</h3>
							<img
								src={pokemon?.image}
								alt="pokemon"
								className="compare-image"
							/>
						</div>
						<div className="pokemon-types-container">
							<div className="pokemon-types">
								<h4 className="pokemon-type-title">Type</h4>
								<div className="pokemon-type-icons">
									{pokemon?.types.map((type: pokemonTYPE) => {
										const keys = Object.keys(type);
										return (
											<div className="pokemon-type">
												<img
													src={type[keys[0]].image}
													alt="pokemon type"
													className="pokemon-type-image"
												/>
											</div>
										);
									})}
								</div>
							</div>
							{getStats()}
						</div>
					</div>
					<div className="compare-action-buttons">
						<button
							className="compare-btn"
							onClick={() => dispatch(addPmToList(pokemon))}
						>
							Add
						</button>
						<button
							className="compare-btn"
							onClick={() => navigate(`/pokemon/${pokemon.id}`)}
						>
							View
						</button>
						<button
							className="compare-btn"
							onClick={() => dispatch(removeFromCompare({ id: pokemon.id }))}
						>
							Remove
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CompareContainer;
