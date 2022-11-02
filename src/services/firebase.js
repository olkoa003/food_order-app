import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAmWoyh8o0fXIzs0OFqJS2mDPvWuqlkVDo",
    authDomain: "food-order-app-2afaf.firebaseapp.com",
    projectId: "food-order-app-2afaf",
    storageBucket: "food-order-app-2afaf.appspot.com",
    messagingSenderId: "116180756822",
    appId: "1:116180756822:web:8718dc508ae538d5274ef7",
    measurementId: "G-77BFE1K53F",
    databaseURL: "https://food-order-app-2afaf-default-rtdb.firebaseio.com/",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);