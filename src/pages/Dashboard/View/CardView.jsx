import { Link } from "react-router-dom";
import useView from "../../../components/useView";

const CardView = () => {
  const [employees, handleVerified] = useView();
  return (
    <div className="my-5">
      <h3 className="text-3xl text-center mt-10 mb-7 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">
    All Employee
      </h3>

      <div className="grid grid-cols-1 w-11/12 lg:w-9/12 mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <div
            key={employee._id}
            className="card w-96  md:w-80 bg-slate-300 shadow-md hover:shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-3xl ml-20 md:ml-12 text-[#DA0037]">
                {employee.user}
              </h2>
              <div className="flex flex-col">
                <p>
                  <span className="font-medium mb-2">Email:</span>
                  {employee.email}
                </p>
                <div className="flex flex-row w-24">
                  <p className="font-medium">Isverified:</p>
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
                </div>
              </div>
              <div className="flex  flex-col">
                <p>
                  <span className="font-medium md:my-2">Account No: </span>
                  {employee.account}
                </p>
                <p>
                  <span className="font-medium  lg:ml-0 md:ml-0">Salary: </span>
                  ${employee.salary}
                </p>
              </div>
              <div className="  flex gap-4 mt-5 ml-12 lg:ml-0 md:ml-6">
                {employee.varified === true && employee.isFired===false ? (
                  <button className="text-center text-[#DA0037] bg-[#FFC5C5] rounded-md p-3 lg:w-32 w-24">
                    <Link to={`/dashboard/payment/${employee._id}`}>Pay</Link>
                  </button>
                ) : (
                  <button
                    disabled
                    className="text-center text-[#DA0037] bg-slate-400 rounded-md p-3 lg:w-32 w-24"
                  >
                    Pay
                  </button>
                )}

                <span className="lg:w-32 text-center text-[#DA0037] bg-[#FFC5C5] rounded-md p-3 w-24">
                  <Link to={`/dashboard/details/${employee._id}`}>Details</Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
