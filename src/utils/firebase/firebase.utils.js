import {initializeApp} from 'firebase/app';
import {getAuth,
signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUzUTMyCjI5YfGMbsdAD5xljoafQfik3Y",
    authDomain: "e-commerce-store-db-a52ac.firebaseapp.com",
    projectId: "e-commerce-store-db-a52ac",
    storageBucket: "e-commerce-store-db-a52ac.appspot.com",
    messagingSenderId: "859565789819",
    appId: "1:859565789819:web:e2d2d15bb88f3732f688de"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);