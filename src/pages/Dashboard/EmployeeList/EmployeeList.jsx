import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import usePublicAxios from "../../../components/usePublicAxios";

const EmployeeList = () => {
  const publicAxios = usePublicAxios();
  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await publicAxios.get("/users");
      return res.data;
    },
  });
  console.log(employees);
  return (
    <div className=" ">
      <h1 className="text-[#DA0037] text-4xl font-bold text-center mt-12 mb-6">
        All Employee List
      </h1>
      <div className="overflow-x-auto bg-gray-200">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-[16px] font-bold">
              <th>Sl No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th> Verified</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {employees.map((employee, i) => (
              <tr key={employee._id} className="my-12">
                <th>{i + 1}</th>
                <td>{employee.user}</td>
                <td>{employee.email}</td>
                <td>{employee.account}</td>
                <td>{employee.salary}</td>
                <td>
                  <button>X</button>
                </td>
                <td>
                  <button className="border-2 border-[#FFC5C5] text-[#DA0037] px-4 py-2 rounded">Pay</button>
                </td>
                <td >
                  <span className=" text-[#DA0037] bg-[#FFC5C5] rounded-md p-3"><Link>Details</Link></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
