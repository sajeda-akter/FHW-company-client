import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import UseAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEmployee = () => {
    const {user,loading}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {data:isEmployee,isPending:isEmployeeLoading}=useQuery({
     queryKey:[user?.email,'isEmployee'],
     enabled:!loading,
     queryFn:async()=>{
        const res= await axiosSecure.get(`/users/employee/${user?.email}`)
       
        return res.data?.employee
     }
    })
    return [isEmployee,isEmployeeLoading]
};

export default useEmployee;