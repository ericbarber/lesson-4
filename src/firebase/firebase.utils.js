import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBpkS7NvPt570hkjSpzsxrg5gfr8LXXiOI",
    authDomain: "crwn-db-891fc.firebaseapp.com",
    projectId: "crwn-db-891fc",
    storageBucket: "crwn-db-891fc.appspot.com",
    messagingSenderId: "556051478875",
    appId: "1:556051478875:web:a2c452b6a6e809d087c27e",
    measurementId: "G-4Q7W5PY2M6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;