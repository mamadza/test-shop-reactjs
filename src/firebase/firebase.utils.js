import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDfdJ62oDRqgGZn9FePEkZXwih8sm0Epnw",
    authDomain: "test-react-shop-db.firebaseapp.com",
    databaseURL: "https://test-react-shop-db.firebaseio.com",
    projectId: "test-react-shop-db",
    storageBucket: "test-react-shop-db.appspot.com",
    messagingSenderId: "262867362043",
    appId: "1:262867362043:web:28e592a03a55cabafb105e",
    measurementId: "G-74GPX8PKMV"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 