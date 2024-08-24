import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyDcySB7haPdrry0_ZbX_Cl-c5EIQKUdxkA",
    authDomain: "clon-netflix-c54bd.firebaseapp.com",
    projectId: "clon-netflix-c54bd",
    storageBucket: "clon-netflix-c54bd.appspot.com",
    messagingSenderId: "657516652310",
    appId: "1:657516652310:web:bb96a432b82462148c1237",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
    const user = response.user;
    await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        });
    } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-'.join(" ")));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-'.join(" ")));
    }
};

const logout = async () => {
    signOut(auth);
};

export { auth, db, login, signUp, logout}