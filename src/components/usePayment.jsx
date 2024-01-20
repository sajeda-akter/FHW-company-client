import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const usePayment = () => {
    const {user}=useContext(AuthContext)
    const {data:userSalary=[],refetch}=useQuery({
        queryKey:['userSalary'],
        queryFn:async()=>{
            const data=await fetch(`https://assaingment12-category-0004-server.vercel.app/addpayment?email=${user?.email}`)
        return data.json()
        }
    })
    return [userSalary,refetch]
};

export default usePayment;