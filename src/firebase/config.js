import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaY8D2WJ-JpWujUa2vnjxxHS-OiazDqxQ",
  authDomain: "eventsplanner-3cac4.firebaseapp.com",
  projectId: "eventsplanner-3cac4",
  storageBucket: "eventsplanner-3cac4.firebasestorage.app",
  messagingSenderId: "523995742417",
  appId: "1:523995742417:web:a5c63540f5eff50af145f0",
  measurementId: "G-PRV1S1ED81",
};

//  CRITICAL — Firebase API keys are hardcoded in source code and now
//            public in your GitHub repo forever (even in git history).
//            Move everything to a .env file:
//              VITE_FIREBASE_API_KEY=AIzaSy...
//            Then use: apiKey: import.meta.env.VITE_FIREBASE_API_KEY
//            After that, go to Firebase Console and regenerate/rotate the API key.

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
