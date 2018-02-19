import firebase from 'firebase';
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp
(firebaseConfig)
esport default firebaseApp.firestore()
