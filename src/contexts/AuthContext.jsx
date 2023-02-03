import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "../services/firebase"
import { createContext, useEffect, useState } from "react"
import { getDatabase, set, ref} from "firebase/database";
import { app  } from '../services/firebase';

export const AuthContext = createContext({});


export function AuthContextProvider(props){
  const [user, setUser] = useState()

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const{displayName, photoURL, uid} = user
        if(!displayName || !photoURL ){
          throw new Error('Missing Information from Google Account')
        }
        setUser({
          id:uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
    return() => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle(){
    const googleProvider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, googleProvider);
      if(result.user){
        const{displayName, photoURL, uid} = result.user
        if(!displayName || !photoURL ){
          throw new Error('Missing Information from Google Account')
        }
        setUser({
          id:uid,
          name: displayName,
          avatar: photoURL
        })
        const userInfo = {
          id:uid,
          name: displayName,
          avatar: photoURL
        }
        const db = getDatabase(app)
        await set(ref(db,`profile/${userInfo.id}/info`), userInfo)
      }
  }


  return(
    <AuthContext.Provider value={{user, signInWithGoogle}}>
     {props.children}
    </AuthContext.Provider>
  )
}