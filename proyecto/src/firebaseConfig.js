import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-LaAbz78U2LvDbtD5MDzykkEIehKekiY",
  authDomain: "cats---firebase.firebaseapp.com",
  projectId: "cats---firebase",
  storageBucket: "cats---firebase.firebasestorage.app",
  messagingSenderId: "656527662934",
  appId: "1:656527662934:web:53e2e90b9ecd0e23a2c0f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };