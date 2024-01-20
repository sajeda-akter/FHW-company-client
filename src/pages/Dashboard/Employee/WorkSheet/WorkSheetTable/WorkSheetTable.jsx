import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../../components/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider/AuthProvider";

const WorkSheetTable = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: works = [], refetch } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/workSheet/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="mt-12 lg:mt-0 w-11/12 lg:w-2/4 mx-auto">
      <h3 className="text-3xl text-center mt-10 mb-7 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">
        Work Details
      </h3>

      <div className="overflow-x-auto">
        <table className="table  rounded-none ">
          {/* head */}
          <thead>
            <tr className="lg:text-xl bg-slate-300">
              <th>SL</th>
              <th>Task</th>
              <th>Work Hour</th>
              <th>Submitted Date</th>
            </tr>
          </thead>
          <tbody>
            {works.map((work, i) => (
              <tr key={work._id} className="bg-slate-100">
                <th>{i + 1}</th>
                <td>{work.task}</td>
                <td>{work.work_hour}</td>
                <td>{work.date}</td>
              </tr>
            ))}
            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkSheetTable;
