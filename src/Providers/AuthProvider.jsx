import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }
  const UpdateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
      .then(() => {
        setUser({ ...auth.currentUser, ...updateData });
      });

  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('currently logged');
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios.post('http://localhost:5000/jwt', user, {
          withCredentials: true
        })
          .then(res => {
            console.log('signin' , res.data)
            setLoading(false);
          })

      }
      else{
        axios.post('http://localhost:5000/logout',{},{
          withCredentials:true
        })
        .then(res => {
          console.log('logout' , res.data);
          setLoading(false);
        })
      }


     
    })
    return () => {
      unSubscribe();
    }
  }, [])
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    UpdateUserProfile

  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
