import { signOut } from "firebase/auth";
import React from "react";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { firebaseAuth } from "../utils/firebaseConfig";
import { useAppDispatch } from "../app/hooks";
import { setPokemonTab, setToast, setUserStatus } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constans";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();

	const handleLogout = () => {
		signOut(firebaseAuth);
		dispatch(setUserStatus(undefined));
		dispatch(setToast("logged out successfully."));
	};

	const routes = [
		{
			name: pokemonTabs.description,
			value: "Description",
		},
		{
			name: pokemonTabs.evolution,
			value: "Evolution",
		},
		{
			name: pokemonTabs.locations,
			value: "Catching",
		},
		{
			name: pokemonTabs.moves,
			value: "Capable Moves",
		},
	];

	return (
		<footer>
			<div className=""></div>
			<div className="data">
				{location.pathname.includes("/pokemon") && (
					<ul>
						{routes.map((route) => {
							return (
								<li
									key={route.name}
									className="1"
									onClick={() => {
										dispatch(setPokemonTab(route.name));
									}}
								>
									{route.value}
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<div className="block">
				<MdOutlinePowerSettingsNew onClick={handleLogout} />
			</div>
		</footer>
	);
};

export default Footer;
