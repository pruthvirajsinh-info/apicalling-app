import { useEffect } from "react";
import { pokemonTypes } from "../utils/getPokemonTypes";
import { useAppDispatch } from "../app/hooks";
import { addPmToList } from "../app/reducers/addPmToList";
import { setPokemonTab } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constans";
import { currentPokemonTYPE, pokemonStatesInFACE } from "../utils/Types";

export default function Info({
	data,
}: {
	data: currentPokemonTYPE | undefined;
}) {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const progressBars = document.querySelectorAll("progress");
		progressBars.forEach((progressBar) => {
			progressBar.style.width = "10rem";
		});
	}, []);
	const createStatsArray = (types: string[], statType: string) => {
		const statsSet = new Set();
		types?.forEach((type: string) => {
			// @ts-ignore
			pokemonTypes[type][statType].forEach((stat: string) => {
				if (!statsSet.has(stat)) {
					statsSet.add(stat[0].toUpperCase() + stat.slice(1));
				}
			});
		});
		return Array.from(statsSet);
	};
	return (
		<>
			<div className="details">
				<h1 className="name">{data?.name}</h1>
				<h3>
					<span className="b-s-t">Type:</span>{" "}
					<span className="b-s-v">{data?.types.join(" - ")}</span>
				</h3>
				<h3>
					<span className="b-s-t">Evolution:</span>{" "}
					<span className="b-s-v">{data?.evolutionLevel}</span>
				</h3>
				<button onClick={() => dispatch(setPokemonTab(pokemonTabs.evolution))}>
					See next evolution
				</button>
			</div>
			<div className="stats">
				<ul>
					{data?.stats.map((stat: pokemonStatesInFACE) => {
						return (
							<li key={stat.name}>
								<span className="b-s-t">{stat.name}: </span>
								<span className="b-s-v">{stat.value}</span>
								<progress max={100} value={stat.value} />
							</li>
						);
					})}
				</ul>
			</div>
			<div className="battle-stats">
				{
					<ul>
						<li>
							<span className="b-s-t">Strengths:</span>
							<span className="b-s-v">
								{createStatsArray(
									(data?.types as unknown) as string[],
									"strength"
								).join(", ")}
							</span>
						</li>
						<li>
							<span className="b-s-t">Weakness:</span>
							<span className="b-s-v">
								{createStatsArray(
									(data?.types as unknown) as string[],
									"weakness"
								).join(", ")}
							</span>
						</li>
						<li>
							<span className="b-s-t">Resistant:</span>
							<span className="b-s-v">
								{createStatsArray(
									(data?.types as unknown) as string[],
									"resistance"
								).join(", ")}
							</span>
						</li>
						<li>
							<span className="b-s-t">Vulnerable:</span>
							<span className="b-s-v">
								{createStatsArray(
									(data?.types as unknown) as string[],
									"vulnerable"
								).join(", ")}
							</span>
						</li>
					</ul>
				}
				<button
					onClick={() => dispatch(addPmToList(data!))}
					className="add-pokemon"
				>
					Add Pokemon
				</button>
			</div>
		</>
	);
}
