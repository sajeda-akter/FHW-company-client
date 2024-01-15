import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


// const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {userCreate,updateUserInfo}=useContext(AuthContext)
  const handleSignup = async(data) => {
   

        userCreate(data.email,data.password)
    .then(result=>{
      updateUserInfo(data.name,data.photoURL)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User successfully signup",
        showConfirmButton: false,
        timer: 1000
      });
      console.log(result.user)

    })
    .catch(err=>console.log(err))
    reset()
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
            name="photo"
            placeholder="Select Your photoURL"
            {...register("photoURL", { required: true })}
            className="text-[17px] outline-0 border-b-2 border-white text-white bg-[#092635]"
          />
          {errors.photoURL && (
            <span className="text-red-500 font-medium">
              PhotoURL is require
            </span>
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
