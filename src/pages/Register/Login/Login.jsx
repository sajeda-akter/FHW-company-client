import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {userLogin}=useContext(AuthContext)
  const handleLogin = (data) => {
    userLogin(data.email,data.password)
    .then(result=>{
        console.log(result.user)
        Swal.fire({
            position: "center",
            title: "User successfully login",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch(err=>console.log(err))
    reset();
  };
  return (
    <div className="p-12 rounded-lg bg-[#092635] max-w-4xl mx-auto text-white my-12">
      <h1 className="text-2xl font-bold text-center">Login </h1>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
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
            })}
            placeholder="Enter your password"
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
           <label className="label ">
            <a href="#" className="text-white hover:text-[#F2AFEF] label-text-alt link link-hover">Forgot password?</a>
          </label>
         
        </div>
        <div className="form-control mt-6 w-80 mx-auto">
          <button className="btn uppercase">Login</button>
        </div>
        <p>
            Create a account{" "}
            <span className="font-bold text-[#F2AFEF]">
              <Link to='/signup'>Signup</Link>
            </span>
          </p>
      </form>
    </div>
  );
};

export default Login;
