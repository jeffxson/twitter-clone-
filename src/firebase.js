import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAL3oSp5BqTxHfdPuX1Vz3yNViueha3pYA',
  authDomain: 'twitter-clone-4a9a8.firebaseapp.com',
  projectId: 'twitter-clone-4a9a8',
  storageBucket: 'twitter-clone-4a9a8.appspot.com',
  messagingSenderId: '1034243112349',
  appId: '1:1034243112349:web:3317fe9c8f5e0fe3390374',
  measurementId: 'G-664NFG49GM'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
