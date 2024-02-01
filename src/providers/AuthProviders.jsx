import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const setProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
            
            if(loggedUser && loggedUser.email)
            {
                const currentUser={
                    email: loggedUser.email,
                }
                fetch('https://toy-market-server-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( currentUser )
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('jwt response', data);
                        localStorage.setItem('access-token', data.token);
                       
                       
                    })
            }
            else{
                localStorage.removeItem('access-token');
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        setProfile,
        googleSignIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;