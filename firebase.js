import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf9YW3wAjOWYhBCt00PM7UDa90b5zBySM",
  authDomain: "kdliving-e253d.firebaseapp.com",
  projectId: "kdliving-e253d",
  storageBucket: "kdliving-e253d.firebasestorage.app",
  messagingSenderId: "199134871398",
  appId: "1:199134871398:web:d16066975ffa16a3b5d2a7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
// export const auth = getAuth(app);

export default app
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()