import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return  <p className="text-3xl text-center mt-24">Loading.....</p>
    }
    if(user){
       return children 
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;