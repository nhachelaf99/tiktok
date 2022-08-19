import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBewmACjHpXimCL-Qqc8z_wDmbiNHU5sjA",
  authDomain: "tiktok-clone-b8ef0.firebaseapp.com",
  projectId: "tiktok-clone-b8ef0",
  storageBucket: "tiktok-clone-b8ef0.appspot.com",
  messagingSenderId: "532455643895",
  appId: "1:532455643895:web:03670a6194428670a411f2",
  measurementId: "G-GXN3TNBK42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
