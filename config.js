import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBtl7iHoUGP-6e0bFq25Q62GfYqM3_B9kI",
    authDomain: "story-hub-9612a.firebaseapp.com",
    projectId: "story-hub-9612a",
    storageBucket: "story-hub-9612a.appspot.com",
    messagingSenderId: "381956915374",
    appId: "1:381956915374:web:28a2901ffe34e46e94ed3f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();