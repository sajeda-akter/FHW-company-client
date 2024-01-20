import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './useAxiosSecure';
import Swal from 'sweetalert2';

const useView = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: employees = [] } = useQuery({
        queryKey: ["employees"],
        queryFn: async () => {
          const res = await axiosSecure.get("/users/employee");
          return res.data;
        },
      });

      const handleVerified = (_id) => {
        axiosSecure.patch(`/users/hr/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Update!",
              text: "Employee verified complete.",
              icon: "success",
            });
          }
        });
      };
    return [employees,handleVerified]
};

export default useView;