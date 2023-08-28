import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5bsge2MKCKvp9AYThxP5XQQlayoGS4FU",
    authDomain: "crwn-clothing-db-91ef0.firebaseapp.com",
    projectId: "crwn-clothing-db-91ef0",
    storageBucket: "crwn-clothing-db-91ef0.appspot.com",
    messagingSenderId: "258021572845",
    appId: "1:258021572845:web:e6f8a5cba212989b564ce4"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
}