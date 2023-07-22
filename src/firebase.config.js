import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJx-T5MJHFUNPT47Q9IuQGHYEV2yTva5I",
  authDomain: "restaurantapp-9fac9.firebaseapp.com",
  databaseURL: "https://restaurantapp-9fac9-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9fac9",
  storageBucket: "restaurantapp-9fac9.appspot.com",
  messagingSenderId: "558091328175",
  appId: "1:558091328175:web:2a378e4eed624bea3d925a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
