import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const EmployeeForAdmin = () => {
  const axiosSecure = UseAxiosSecure();
  const [isTableView, setIsTableView] = useState(true);

  const handleToggleView = () => {
    setIsTableView(!isTableView);
  };
  const { data: employees = [],refetch} = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employee/varified");

      return res.data;
    },
  });

  const handleFire = (_id) => {
    Swal.fire({
       
      title: "Are you sure?",
      text: "You want to make him/her HR",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want him/his!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "HR Make complete!",
              text: "You successfully make HR",
              icon: "success",
              timer: 1000
            });
          }
          refetch()
        });
      }
    });
  };
  const handleMakeHR = (_id) => {
    axiosSecure.patch(`/users/admin/${_id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Make HR Complete",
          text: "Successfully make HR",
          icon: "success",
        });
    }
    refetch()
    });
  };

  return (
    <div className="lg:w-10/12 mx-auto text-center md:w-11/12">
      <button
        className="bg-[#DA0037]  w-52 mx-auto mt-6 rounded-md p-2 text-white text-xl"
        onClick={handleToggleView}
      >
        {isTableView ? "Switch to Card View" : "Switch to Table View"}
      </button>

      <h1 className="text-2xl font-medium mt-12">All Employee and HR</h1>
      {isTableView ? (
        <div className="overflow-x-auto mt-5 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#E6BAA3] text-[#DA0037] lg:text-xl">
                <th></th>
                <th>Name</th>
                <th>Designation</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {employees.map((employee, i) => (
              
              <tr key={employee._id} className={employee.role==='employee'?'bg-slate-200':'bg-base-200'}>
                  <th>{i + 1}</th>
                  <td>{employee.user}</td>
                  <td>{employee.role}</td>
                  {employee.role === "hr" ? (
                    <td>
                      {" "}
                      <h1 className="text-center text-[#DA0037] bg-[#FFC5C5] w-20 p-2 rounded-md">
                        HR
                      </h1>
                    </td>
                  ) : (
                    <td>
                      <button
                        className="text-[#DA0037] bg-[#FFC5C5] p-2 w-20 rounded-md"
                        onClick={() => handleMakeHR(employee._id)}
                      >
                        Make HR
                      </button>
                    </td>
                  )}
                  <td>
                    {employee.isFired === true ? (
                      <h1 className="text-[#DA0037] bg-[#FFC5C5] font-bold p-2 w-12 rounded-md">
                        Fired
                      </h1>
                    ) : (
                      <button
                        className="text-[#DA0037] bg-[#FFC5C5] p-2 w-12 rounded-md"
                        onClick={() => handleFire(employee._id)}
                      >
                        Fire
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">
            {employees.map((employee) => (
              <div
                key={employee._id}
                className="card w-80 bg-slate-200 shadow-xl"
              >
                <div className="card-body ">
                  <h2 className="card-title text-2xl ml-20">{employee.user}</h2>
                  <p className="text-xl">Role:{employee.role}</p>
                  <div className="card-actions justify-center mt-5">
                    <button
                      className="text-[#DA0037] bg-[#FFC5C5] p-2 w-24 rounded-md"
                      onClick={() => handleMakeHR(employee._id)}
                    >
                      Make HR
                    </button>{" "}
                    {employee.isFired === true ? (
                      <h1 className="text-[#DA0037] bg-[#FFC5C5] font-bold p-2 w-16 rounded-md">
                        Fired
                      </h1>
                    ) : (
                      <button
                        className="text-[#DA0037] bg-[#FFC5C5] p-2 w-16 rounded-md"
                        onClick={() => handleFire(employee._id)}
                      >
                        Fire
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeForAdmin;
