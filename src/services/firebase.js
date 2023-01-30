import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBIDqPhvMmLNu0K8GBnBptPwcmzvgVJeyI",
  authDomain: "capstone-29992.firebaseapp.com",
  databaseURL: "https://capstone-29992-default-rtdb.firebaseio.com",
  projectId: "capstone-29992",
  storageBucket: "capstone-29992.appspot.com",
  messagingSenderId: "465952678870",
  appId: "1:465952678870:web:55ac3dde459f9d59683a77"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);