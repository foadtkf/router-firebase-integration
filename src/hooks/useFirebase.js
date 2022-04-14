import { useEffect, useState } from 'react';
import app from './../firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
const auth=getAuth(app)
const googleprovider = new GoogleAuthProvider();
const useFirebase=()=>{

    const [user,setUser]=useState({})
    const signinWithGoogle=() =>{
        signInWithPopup(auth, googleprovider)
  .then((result) => {
    const user = result.user;
    setUser(user)
    console.log(user)
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
  });
    }
    const signoutWithGoogle=()=>{
        const auth = getAuth();
signOut(auth).then(() => {
  console.log('Sign-out successful.')
}).catch((error) => {
  console.log('An error happened.')
});
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[])
return {user,signinWithGoogle,signoutWithGoogle}
}
export default useFirebase