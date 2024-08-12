import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA3c5tzdn6c32reRYsYakKT7vwBRI57UQc",
authDomain: "otp-verfication-3524a.firebaseapp.com",
projectId: "otp-verfication-3524a",
storageBucket: "otp-verfication-3524a.appspot.com",
messagingSenderId: "601642133277",
appId: "1:601642133277:web:2f90af23a275668ecc23f4",
measurementId: "G-B3QPFENNBB"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
