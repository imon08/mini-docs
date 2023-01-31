// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth , signOut} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPbV_rt3Rdc-5P70edcUh8bS0e3L7Y64",
  authDomain: "mini-docs-db522.firebaseapp.com",
  projectId: "mini-docs-db522",
  storageBucket: "mini-docs-db522.appspot.com",
  messagingSenderId: "653357326218",
  appId: "1:653357326218:web:c3497379a686dcbcda3273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider().addScope('https://www.googleapis.com/auth/drive').addScope('https://www.googleapis.com/auth/drive.file')
.addScope('https://www.googleapis.com/auth/drive.appdata')
.addScope('https://www.googleapis.com/auth/drive.metadata')
.addScope('https://www.googleapis.com/auth/drive.readonly')
.addScope('https://www.googleapis.com/auth/drive.metadata.readonly')
.addScope('https://www.googleapis.com/auth/drive.apps.readonly')
.addScope('https://www.googleapis.com/auth/drive.photos.readonly');

const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};

export const logOut = () =>{
    signOut(auth)
}




