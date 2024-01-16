import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const userCreate=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserInfo=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
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
            if(currentUser){
                // 
                const userEmail={email:currentUser.email}
                fetch('http://localhost:5000/jwt',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userEmail)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.token){
                        localStorage.setItem('access-token',data.token)
                        setLoading(false)
    
                    }
    
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
    
            }
        })
        return(()=>{
            return unsubscribe()
        })
    },[])

    const authInfo={user,userCreate,updateUserInfo,userLogin,userLogout,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
 // bg-[#FFC5C5]
    // text-[#DA0037]

export default AuthProvider;