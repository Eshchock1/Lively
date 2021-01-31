import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5WLzSyEhtzwqHCCq_bYHyz8RUT5qHE4E",
    authDomain: "lively-rtd.firebaseapp.com",
    databaseURL: "https://lively-rtd-default-rtdb.firebaseio.com",
    projectId: "lively-rtd",
    storageBucket: "lively-rtd.appspot.com",
  };
 
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;