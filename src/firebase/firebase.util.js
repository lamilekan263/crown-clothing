import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCiZw9ESw02t1xyzJZLgi8x8IKW-ExmbWw",
    authDomain: "crown-db-93cb3.firebaseapp.com",
    databaseURL: "https://crown-db-93cb3.firebaseio.com",
    projectId: "crown-db-93cb3",
    storageBucket: "crown-db-93cb3.appspot.com",
    messagingSenderId: "188866263734",
    appId: "1:188866263734:web:02ec0f025212b6d45f0417",
    measurementId: "G-SHGNNB8T8D"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt : 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;