// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2bUjMa1tVwQwvpW9Z7NDaZMsdNj-31Eo",
  authDomain: "instagram-clone-3c7c5.firebaseapp.com",
  databaseURL: "https://instagram-clone-3c7c5-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-3c7c5",
  storageBucket: "instagram-clone-3c7c5.appspot.com",
  messagingSenderId: "633274454238",
  appId: "1:633274454238:web:27b94d8baf8d2d5bd7b24f",
  measurementId: "G-Z2BHQHCK77"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };