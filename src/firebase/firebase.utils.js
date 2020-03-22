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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef); 
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const {displayName, email } = userAuth;

      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (err) {
        console.log('error createing user', err.message);
      }
    }

    return userRef
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 