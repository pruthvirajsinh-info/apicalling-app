// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCesyXlVMiF7vXm4N6PrNvm5GHHzupxLKk",
	authDomain: "pokemon-proj-9af49.firebaseapp.com",
	projectId: "pokemon-proj-9af49",
	storageBucket: "pokemon-proj-9af49.appspot.com",
	messagingSenderId: "1058052623699",
	appId: "1:1058052623699:web:69441c650d51f40de125a6",
	measurementId: "G-DNGDYN7C35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
