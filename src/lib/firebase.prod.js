import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

// we need a config
const config = {
    apiKey: "AIzaSyDWiN7M6OlKt5-efPULdJB90EBKVVAhXGE",
    authDomain: "netflix-918cb.firebaseapp.com",
    projectId: "netflix-918cb",
    storageBucket: "netflix-918cb.appspot.com",
    messagingSenderId: "260399374713",
    appId: "1:260399374713:web:5dd4725acab28d9649cfa8"
}

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};