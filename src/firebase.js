import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNhjmat5ZVcrrEan4Y1j_Ld5Uh8PPTWZA",
  authDomain: "quora-clone-daad0.firebaseapp.com",
  projectId: "quora-clone-daad0",
  storageBucket: "quora-clone-daad0.appspot.com",
  messagingSenderId: "530861087711",
  appId: "1:530861087711:web:bf458fcdc9e4782e72826a",
  measurementId: "G-W4HZB2XPYH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
