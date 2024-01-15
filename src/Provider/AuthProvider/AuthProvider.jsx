import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState(null)
    
    const userCreate=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserInfo=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
    }

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userLogout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })

        return (()=>unsubscribe())
    },[])

    const authInfo={user,userCreate,updateUserInfo,userLogin,userLogout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
 // bg-[#FFC5C5]
    // text-[#DA0037]

export default AuthProvider;