// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0X9r1oYYaUduJ89MVEhySdTvX2fqbUUE",
  authDomain: "panditplastic-a7a9f.firebaseapp.com",
  projectId: "panditplastic-a7a9f",
  storageBucket: "panditplastic-a7a9f.appspot.com",
  messagingSenderId: "683872063660",
  appId: "1:683872063660:web:fe6f2a397fa1701903cf09",
  measurementId: "G-BL0VPBELEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
