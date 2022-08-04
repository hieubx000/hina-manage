
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8u8x0vBKAx6pV03MsplnoHt2XFjkMHRM",
    authDomain: "hina-manage.firebaseapp.com",
    projectId: "hina-manage",
    storageBucket: "hina-manage.appspot.com",
    messagingSenderId: "356838031108",
    appId: "1:356838031108:web:7ff8cc528af2c638b19a51",
    measurementId: "G-1L9EVW92DJ"
};
initializeApp(firebaseConfig);
export const auth = getAuth()

export const google = new GoogleAuthProvider()
