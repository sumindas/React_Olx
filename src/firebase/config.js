import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCv2Mi2Ylvhxm3Pb3SISSsTWFP5_ZayXTM",
    authDomain: "olxclone-ff18a.firebaseapp.com",
    projectId: "olxclone-ff18a",
    storageBucket: "olxclone-ff18a.appspot.com",
    messagingSenderId: "806971767730",
    appId: "1:806971767730:web:01c34ff9e4ea90b2f802ab",
    measurementId: "G-83KGL4RQC9"
  };

export default firebase.initializeApp(firebaseConfig)
