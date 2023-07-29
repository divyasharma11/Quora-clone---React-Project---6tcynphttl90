// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNhjmat5ZVcrrEan4Y1j_Ld5Uh8PPTWZA",
  authDomain: "quora-clone-daad0.firebaseapp.com",
  projectId: "quora-clone-daad0",
  storageBucket: "quora-clone-daad0.appspot.com",
  messagingSenderId: "530861087711",
  appId: "1:530861087711:web:9dc1e050d0f77bee72826a",
  measurementId: "G-1Z1Q2D8H2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };