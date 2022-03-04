import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBivXJnMV_YaIwq56dNJ2CPtPfcAX8lrYs",
  authDomain: "messenger-a0749.firebaseapp.com",
  projectId: "messenger-a0749",
  storageBucket: "messenger-a0749.appspot.com",
  messagingSenderId: "603944473341",
  appId: "1:603944473341:web:5bb69ae570292846622494",
  measurementId: "G-ZT3R9SN2PQ",
  databaseURL: "https://messenger-a0749-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export {app}
// const analytics = getAnalytics(app)
