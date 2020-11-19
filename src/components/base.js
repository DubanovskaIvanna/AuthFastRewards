import firebase from "firebase/app";
import "firebase/auth";



const app = firebase.initializeApp({
    apiKey: "AIzaSyAPNNHhRKbJP65WdWFf-t2-7Syr1-Ets3g",
    authDomain: "authfastrewards.firebaseapp.com",
    databaseURL: "https://authfastrewards.firebaseio.com",
    projectId: "authfastrewards",
    storageBucket: "authfastrewards.appspot.com",
    messagingSenderId: "951345793161",
    appId: "1:951345793161:web:e1430d2899a2f19225de58",
    measurementId: "G-7QHPXQKVZZ"
  
  })
  export default app;