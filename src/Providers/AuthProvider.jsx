import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase-authentication/firebase.config"; //GetStarted


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null); //default value is null

const auth = getAuth(app); //GetStarted

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); //default value is null
    const [loading, setLoading] = useState(true); //by default setLoading is true
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser= (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    } 
    
    
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return ()=> {
            return unsubscribe();
        }
    } ,[])
    
    const authInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        logOut,
        updateUserProfile,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;