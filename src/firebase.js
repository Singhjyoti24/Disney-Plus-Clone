import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCOXpEZ_bCAQaoHeWCPmooMbJqZbU726gU",
    authDomain: "magic-world-12f4f.firebaseapp.com",
    projectId: "magic-world-12f4f",
    storageBucket: "magic-world-12f4f.appspot.com",
    messagingSenderId: "788782288897",
    appId: "1:788782288897:web:98f1ef1e83de6b4a513000",
    measurementId: "G-VDYN04BT1V"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
