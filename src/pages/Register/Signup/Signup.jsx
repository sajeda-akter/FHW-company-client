import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import usePublicAxios from "../../../components/usePublicAxios";


const image_hosting_key = import.meta.env.VITE_REACT_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const publicAxios=usePublicAxios()
  const navigate=useNavigate()

  const {userCreate,updateUserInfo}=useContext(AuthContext)
  const handleSignup = async(data) => {

   const imgFile = { image: data.image[0] };
   const res = await axios.post(image_hosting_api, imgFile, {
     headers: {
       "content-type": "multipart/form-data",
     },
   });
   if(res.data.success){
        userCreate(data.email,data.password)
    .then(result=>{
      const image=res.data.data.display_url
      const userInfo={
        user:data.name,
        email:data.email,
        role:data.role,
        salary:data.salary,
        account:data.account,
        image
        

      }
      
      updateUserInfo(data.name,image)
      .then(()=>{
        const res=publicAxios.post('/users',userInfo)
        return res.data
      })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User successfully signup",
        showConfirmButton: false,
        timer: 1000
      });
     navigate('/')

    })
    .catch(err=>console.log(err))
    reset()
   }
    
  };
  return (
    <div className="p-12 rounded-lg bg-[#092635] max-w-4xl mx-auto text-white my-12">
      <h1 className="text-2xl font-bold text-center">Signup Here</h1>
      <form className="card-body" onSubmit={handleSubmit(handleSignup)}>
        <div className="form-control my-3">
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Enter your name"
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.name && (
            <span className="text-red-500 font-medium">Name is require</span>
          )}
        </div>
        <div className="form-control my-3">
          <input
            type="file"
            name="image"
            placeholder="Select Your image"
            {...register("image", { required: true })}
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.image && (
            <span className="text-red-500 font-medium">
              Image is require
            </span>
          )}
        </div>
        <div className="form-control my-3">
        <select
              name="role"
              {...register("role")}
              className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
            >
              <option disabled selected>
                Select your designation
              </option>
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
          {errors.role && (
            <span className="text-red-500 font-medium">Designation is require</span>
          )}
        </div>
        <div className="form-control my-3">
          <input
            type="number"
            {...register("salary", { required: true })}
            name="salary"
            placeholder="Enter your salary"
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.salary && (
            <span className="text-red-500 font-medium">Salary is require</span>
          )}
        </div>
        <div className="form-control my-3">
          <input
            type="text"
            {...register("account", { required: true })}
            name="account"
            placeholder="Enter your account"
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.account && (
            <span className="text-red-500 font-medium">Account is require</span>
          )}
        </div>
        <div className="form-control my-3">
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="Enter your email"
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.email && (
            <span className="text-red-500 font-medium">Email is require</span>
          )}
        </div>
        <div className="form-control my-3">
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="password"
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
          <p>
            Already have a account?{" "}
            <span className="font-bold text-[#F2AFEF]">
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </div>
        <div className="form-control mt-6 w-72 mx-auto">
          <button className="btn uppercase">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
