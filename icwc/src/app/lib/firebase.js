import { getApps, getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYY-cIaDdjojrC4SXYeHP5f9W1CVEN6y8",
    authDomain: "icwc-dd48.firebaseapp.com",
    projectId: "icwc-dd48",
    storageBucket: "icwc-dd48.appspot.com",
    messagingSenderId: "750235688685",
    appId: "1:750235688685:web:46ab342aa80a52b6d736e4",
    measurementId: "G-M6VHWTCY7Z"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const analytics = () => {
  if (typeof window !== "undefined") {
    return getAnalytics(firebaseApp);
  } else {
    return null;
  }
};

export { auth, db, storage, analytics };