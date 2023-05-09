import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
// import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./scss/index.scss";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts, setUserStatus } from "./app/slices/AppSlice";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/firebaseConfig";

//@ts-ignore
import { Helmet } from "react-helmet";

function App() {
	const { toasts } = useAppSelector(({ app }) => app);
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (currentuser) => {
			if (currentuser) {
				dispatch(setUserStatus({ email: currentuser.email }));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		if (toasts.length) {
			const toastOptions: ToastOptions = {
				position: "bottom-right",
				autoClose: 2000,
				pauseOnHover: true,
				draggable: true,
				theme: "dark",
			};

			toasts.forEach((message: string) => {
				toast(message, toastOptions);
			});

			dispatch(clearToasts());
		}
	}, [toasts, dispatch]);

	return (
		<div className="main-container">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Card Collector</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<Background />
			<BrowserRouter>
				<div className="app">
					<Navbar />
					<Routes>
						<Route element={<Search />} path="/search" />
						<Route element={<MyList />} path="/mylist" />
						<Route element={<About />} path="/about" />
						<Route element={<Compare />} path="/compare" />
						<Route element={<Pokemon />} path="/pokemon/:id" />
						<Route element={<Navigate to="/pokemon/1" />} path="*" />
					</Routes>
					{/* <Wrapper /> */}
					<Footer />
					<ToastContainer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
