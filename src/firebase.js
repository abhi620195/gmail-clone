import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQunyy6pKlurtRAn4zo9-tWQMi2gVccI4",
    authDomain: "clone-with-reactjs-322aa.firebaseapp.com",
    projectId: "clone-with-reactjs-322aa",
    storageBucket: "clone-with-reactjs-322aa.appspot.com",
    messagingSenderId: "353106504038",
    appId: "1:353106504038:web:e37eb1a12c7bc10f91c0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

 export { db }