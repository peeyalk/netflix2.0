// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const auth = getAuth(app);
/**
 * This function is called when ever authentication state changes
 * Call this from the root of the APP ie. App.js
 * @param {firebase getAuth()} auth
 * @param {function} callback (authenticatedUser)
  onAuthStateChanged(auth, (authenticatedUser) => {
    // return authenticatedUser;
  });
*/

export const registerUserWithEmailAndPassword = (regEmail, regPassword) => {
  return createUserWithEmailAndPassword(auth, regEmail, regPassword)
    .then((authUser) => {
      console.log('authUser', authUser);
    })
    .catch((err) => {
      console.log('authUser', err);
    });
};

const database = getFirestore(app);
export default database;
