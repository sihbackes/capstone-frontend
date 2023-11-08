import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBIDqPhvMmLNu0K8GBnBptPwcmzvgVJeyI",
//   authDomain: "capstone-29992.firebaseapp.com",
//   databaseURL: "https://capstone-29992-default-rtdb.firebaseio.com",
//   projectId: "capstone-29992",
//   storageBucket: "capstone-29992.appspot.com",
//   messagingSenderId: "465952678870",
//   appId: "1:465952678870:web:55ac3dde459f9d59683a77"
// };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);