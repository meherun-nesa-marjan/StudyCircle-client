import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);
      }
      const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
      }
      const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
      }
      const updateUserProfile =(updateData)=>{
        return updateUserProfile(auth.currentUser, updateData)
        .then(() => {
          setUser({ ...auth.currentUser, ...updateData });
        });
    
      }
      const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
      }
      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
          console.log('currently logged');
          setUser(currentUser);
          setLoading(false);
        })
        return() =>{
          unSubscribe();
        }
      },[])
    
    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;