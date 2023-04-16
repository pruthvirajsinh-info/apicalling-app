import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAppDispatch } from "../app/hooks";
import { setUserStatus } from "../app/slices/AppSlice";
import { Await } from "react-router-dom";

const Login = () => {
	const dispatch = useAppDispatch();

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();
		const {
			user: { email, uid },
		} = await signInWithPopup(firebaseAuth, provider);

		if (email) {
			try {
				const firestoreQuery = query(usersRef, where("uid", "==", uid));
				const fetchedUser = await getDocs(firestoreQuery);
				console.log(fetchedUser, "fetchedUser");

				if (fetchedUser.docs.length === 0) {
					await addDoc(usersRef, { uid, email });
				}

				dispatch(setUserStatus({ email }));
			} catch (e) {
				console.log(e, "e");
			}
		}
	};

	return (
		<div className="login">
			<button className="login-btn" onClick={handleLogin}>
				<FcGoogle />
				<span className="test">
					<span className="log">log</span>
					<span className="in">in</span>
				</span>
				<span className="with">with</span>
				<span className="google">google</span>
			</button>
		</div>
	);
};

export default Login;
