import moment from "moment";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import WorkSheetTable from "./WorkSheetTable/WorkSheetTable";
import UseAxiosSecure from "../../../../components/useAxiosSecure";
import Swal from "sweetalert2";

const WorkSheet = () => {
    const axiosSecure=UseAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const date = moment(startDate).format("DD-MM-YYYY");

  const handleWorkSheet = (data) => {
    const workInfo={
        task:data.task,
        work_hour:data.work,
        date
    }
    axiosSecure.post('/workSheet',workInfo)
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Work sheet successfully submit",
                showConfirmButton: false,
                timer: 1000
              });
        }
    })
    
  };
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center">
      <form
        className="card-body max-w-md bg-red-200"
        onSubmit={handleSubmit(handleWorkSheet)}
      >
        <div className="form-control ">
          <select {...register('task',{required:true})} className="select select-bordered w-full max-w-xs" >
            <option disabled selected>
             Select The Task
            </option>
            <option value='sales'>Sales</option>
            <option value='support'>Support</option>
            <option value='contact'>Contact</option>
            <option value='paper work'>Paper Work</option>
            <option value='marketing'>Marketing</option>
            <option value='acoountant'>Acoountant</option>
            
          {errors.task && <p>Select the task</p>}
          </select>
        </div>
        <div className="form-control ">
          <input
            type="text"
            placeholder="Enter Worked time"
            {...register("work")}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <ReactDatePicker
            className="w-52 rounded-md p-3 border-2 border-text-red"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd-MM-yyyy"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      <WorkSheetTable />
    </div>
  );
};

export default WorkSheet;
