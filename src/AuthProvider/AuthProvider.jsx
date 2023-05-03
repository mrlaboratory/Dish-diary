import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../utils/firebase.config';
import { Toaster, toast } from 'react-hot-toast';
const auth = getAuth(app)
export const AuthContext = createContext()
import AOS from 'aos';
import 'aos/dist/aos.css';


const AuthProvider = ({ children }) => {

    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://dish-diary-server.vercel.app/chef')
            .then(res => res.json())
            .then(d => setChefs(d.slice(0, 9)))
    }, [])

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-out'
        });
      }, []);

    const [path,setPath] = useState('/')
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
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithGithub = () => {
        setLoading(true)
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
        chefs,
        createUser,
        loginUser,
        signOutUser,
        loading,
        loginWithGoogle,
        loginWithGithub,
        path,
        setPath,



    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default AuthProvider;