import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJnvZLFLZBJ9HKX0k1htVz4XUcugACirk",
  authDomain: "planet-assignment-dad2c.firebaseapp.com",
  projectId: "planet-assignment-dad2c",
  storageBucket: "planet-assignment-dad2c.appspot.com",
  messagingSenderId: "674418466548",
  appId: "1:674418466548:web:e86b8978ca3283994ac8a1",
  measurementId: "G-8462L983DD",
});

const db = firebaseApp.firestore();
