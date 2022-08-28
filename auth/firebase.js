import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseConfig = {
  apiKey: "AIzaSyD_HTyBYKr9wfyhPPk-r6WJvppIkx7Mys4",
  authDomain: "nvited-65230.firebaseapp.com",
  projectId: "nvited-65230",
  storageBucket: "nvited-65230.appspot.com",
  messagingSenderId: "589339639956",
  appId: "1:589339639956:web:6bd07e639b701ab235b481",
  measurementId: "G-KBYPPQGF5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default auth;
