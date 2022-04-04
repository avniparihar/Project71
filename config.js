import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCT91_vZX-CptFLD3mMTfMyNGFaOz-3aOY",
    authDomain: "project71-d4e47.firebaseapp.com",
    projectId: "project71-d4e47",
    storageBucket: "project71-d4e47.appspot.com",
    messagingSenderId: "366384325498",
    appId: "1:366384325498:web:52fe3aff66f9f5dc3aacc3"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
