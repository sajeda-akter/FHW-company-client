import { Link } from "react-router-dom";
import useView from "../../../components/useView";

const TableView = () => {
  const [employees, handleVerified] = useView();
  return (
    <div className=" ">
      <h1 className="text-[#DA0037] text-2xl lg:text-4xl font-bold text-center mt-12 mb-6">
        All Employee List
      </h1>
      <div className="overflow-x-auto bg-gray-200">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="lg:text-[16px] font-bold">
              <th>Sl No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th> isVerified</th>
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
                  <button onClick={() => handleVerified(employee._id)}>
                    {employee.varified === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-red-600 text-2xl"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </td>
                <td>
                  {/* <button
                      className="border-2 border-[#FFC5C5] text-[#DA0037] px-4 py-2 rounded"
                     
                      disabled={employee.varified == false}
                      onClick={() => handleUsers(employee._id)}
                    >
                      Pay
                    </button> */}
                  <span className=" text-[#DA0037] bg-[#FFC5C5] rounded-md w-32 p-3">
                    {" "}
                    <Link to={`/dashboard/payment/${employee._id}`}>Pay</Link>
                  </span>{" "}
                  {/* <PayModal user={users} /> */}
                </td>
                <td>
                  <span className=" text-[#DA0037] bg-[#FFC5C5] rounded-md p-3">
                    <Link to={`/dashboard/details/${employee._id}`}>
                      Details
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
