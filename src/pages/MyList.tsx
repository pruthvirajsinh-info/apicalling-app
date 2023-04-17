import { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import PokemonCardGrid from "../components/PokemonCardGrid";
import { useDispatch } from "react-redux";
import { getUserPokemons } from "../app/reducers/getUserPokemons";

const MyList = () => {
	const { userInfo } = useAppSelector(({ app }) => app);
	const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
	const dispatch = useDispatch();

	useEffect(() => {
		//@ts-ignore
		dispatch(getUserPokemons());
	}, [userInfo, dispatch]);

	return (
		<div className="mylist">
			{userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
		</div>
	);
};

export default Wrapper(MyList);
