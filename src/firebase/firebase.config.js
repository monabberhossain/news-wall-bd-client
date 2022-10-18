// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASadB2n1-k0rFcRpTV_50SrBDu2rO0O5o",
    authDomain: "news-wall-bd.firebaseapp.com",
    projectId: "news-wall-bd",
    storageBucket: "news-wall-bd.appspot.com",
    messagingSenderId: "199986273697",
    appId: "1:199986273697:web:85bf525220d0c98a913fe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
