import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase.config';
import { Toaster, toast } from 'react-hot-toast';
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        toast.success('Account signOut')
        return signOut(auth)
    }


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsub()
        }
    }, [])


    const info = {
        user,
        createUser,
        loginUser,
        signOutUser,
        loading,
        loginWithGoogle,
        loginWithGithub,



    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default AuthProvider;