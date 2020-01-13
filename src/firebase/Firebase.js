import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAlYj7gaxHg6fgVw0QgDHTWQQKXL33cQzs',
  authDomain: 'ecommerce-react-c6611.firebaseapp.com',
  databaseURL: 'https://ecommerce-react-c6611.firebaseio.com',
  projectId: 'ecommerce-react-c6611',
  storageBucket: 'ecommerce-react-c6611.appspot.com',
  messagingSenderId: '144511967249',
  appId: '1:144511967249:web:27f43ca19c12bc2f7251b0',
  measurementId: 'G-HGMD4PN5QT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
