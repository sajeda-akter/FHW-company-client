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
              reset()
        }
    })
    
  };
  return (
   <div className="">
   
     <div className="mb-5 flex lg:flex-row flex-col justify-around gap-x-12">
     <div>
     <h3 className="text-3xl text-center mt-10 mb-7 lg:ml-40 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">
        Work Submit Form
      </h3>
      <form
        className="card-body lg:w-full w-11/12 mx-auto bg-red-200 rounded-md lg:ml-32"
        onSubmit={handleSubmit(handleWorkSheet)}
      >
        <div className="form-control ">
          <select {...register('task',{required:true})} className="select select-bordered  w-80 md:w-full" >
            <option disabled selected>
             Select The Task
            </option>
            <option value='sales'>Sales</option>
            <option value='support'>Support</option>
            <option value='contact'>Content</option>
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
            className="input input-bordered w-80 md:w-full"
            required
          />
        </div>
        <div className="form-control">
          <ReactDatePicker
            className="w-80 md:w-full rounded-md p-3 border-2 border-text-red"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd-MM-yyyy"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
     </div>
      <WorkSheetTable />
    </div>
   </div>
  );
};

export default WorkSheet;
