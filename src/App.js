
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// import { useAuth } from "./use-auth.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import { usecollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAPNNHhRKbJP65WdWFf-t2-7Syr1-Ets3g",
  authDomain: "authfastrewards.firebaseapp.com",
  databaseURL: "https://authfastrewards.firebaseio.com",
  projectId: "authfastrewards",
  storageBucket: "authfastrewards.appspot.com",
  messagingSenderId: "951345793161",
  appId: "1:951345793161:web:e1430d2899a2f19225de58",
  measurementId: "G-7QHPXQKVZZ"

})


var auth = firebase.auth();
const [user] =useAuthState(auth);
// const authContext = createContext();
// export const useAuthState = () => {
//   return useContext(authContext);
// };

const firestore = firebase.firestore();

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <section>?{user ? <TrackTime/>:<SingIn/>}
      </section>
      </header>
    </div>
  );
}

function SingIn(){
  const singInWithGoogle = () => {
    const provider= new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return  (
    <button onClick={singInWithGoogle}>Sign in with Google</button>
  )
}

function SingOut (){
  return auth.currentUser && (

    <button onClick ={() =>auth.singOut()}>Sing Out</button>
  )
}

function TrackTime(){
  return console.log('Yes');
};

export default App;
