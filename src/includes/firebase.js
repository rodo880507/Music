import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

  apiKey: 'AIzaSyABo-5oQWu8-2ahgqKBt7uR6lE_j4qHMh4',

  authDomain: 'music-476de.firebaseapp.com',

  projectId: 'music-476de',

  storageBucket: 'music-476de.appspot.com',

  appId: '1:19143078575:web:7428d29c4556607108da5a',

};

//  Initializa firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
console.log(songsCollection);
const commentsCollection = db.collection('comment');

export {
  auth, db, usersCollection, storage, songsCollection, commentsCollection,
};

/// rules
// allow read: if true;
// allow write: if request.auth.uid != null;
