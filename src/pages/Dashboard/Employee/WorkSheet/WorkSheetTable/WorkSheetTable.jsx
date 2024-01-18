import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../../components/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider/AuthProvider";


const WorkSheetTable = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
    const {data:works=[]}=useQuery({
        queryKey:['works'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/workSheet/${user?.email}`)
        return res.data
        }
    })
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
        works.map((work,i)=>
            <tr key={work._id}>
            <th>{i+1}</th>
            <td>{work.task}</td>
            <td>{work.work_hour}</td>
            <td>{work.date}</td>
          </tr>
            )
     }
      {/* row 3 */}
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default WorkSheetTable;