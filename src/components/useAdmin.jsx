import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import UseAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user,loading}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {data:isAdmin,isPending:isAdminLoading}=useQuery({
     queryKey:[user?.email,'isAdmin'],
     enabled:!loading,
     queryFn:async()=>{
        const res= await axiosSecure.get(`/users/admin/${user?.email}`)
        return res.data?.admin
     }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;