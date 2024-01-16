import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useHR from "../components/useHR";

const HrRouter = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    const [isHR,isHRLoading]=useHR()
    if(loading || isHRLoading){
        return <p className="text-3xl">Loading.....</p>
    }
    if(user && isHR){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default HrRouter;