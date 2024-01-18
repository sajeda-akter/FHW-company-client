import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import UseAxiosSecure from "./useAxiosSecure";

const useHR = () => {
   const {user,loading}=useContext(AuthContext)
   const axiosSecure=UseAxiosSecure()
   const {data:isHR,isPending:isHRLoading}=useQuery({
    queryKey:[user?.email,'isHR'],
    enabled:!loading,
    queryFn:async()=>{
       const res= await axiosSecure.get(`/users/hr/${user?.email}`)
        return res.data?.hr
    }
   })
   return [isHR,isHRLoading]
};

export default useHR;