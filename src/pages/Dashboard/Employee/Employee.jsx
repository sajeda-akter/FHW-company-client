import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import WorkSheet from "./WorkSheet/WorkSheet";

const Employee = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
    const {data:payments=[]}=useQuery({
        queryKey:['payments'],
        queryFn:async()=>{
          const res =await axiosSecure.get(`/payment/${user?.email}`)
            return res.data
            
        }
    })
    payments.map(payment=>console.log(payment))
    
    return (
       <div>
         <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Month</th>
              <th>Amount</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
           {
            payments.map((payment,i)=>
                <tr key={payment._id} className="bg-base-200">
                <th>{i+1}</th>
                <td>{payment.data.month}</td>
                <td>{payment.data.salary}</td>
                <td>{payment.data.transactionId}</td>
              </tr>
                
                )
           }
           
           </tbody>
        </table>
      </div>
      <WorkSheet/>
       </div>
    );
};

export default Employee;