import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// To do : put my credential or setup supabase login 

const firebaseConfig = {
  apiKey: "AIzaSyC1id8ps8Bknpjm_71XsafpH6OEs0AJpSA",
  authDomain: "poc-analysis-flow.firebaseapp.com",
  projectId: "poc-analysis-flow",
  storageBucket: "poc-analysis-flow.appspot.com",
  messagingSenderId: "545915592375",
  appId: "1:545915592375:web:643f16a547d1d125863732",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };