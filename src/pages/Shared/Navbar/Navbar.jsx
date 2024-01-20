import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const handleLogout = () => {
    userLogout();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User successfully logout",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const menuItems = (
    <>
      <li className="text-[16px] font-medium ml-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[16px] font-medium ml-2">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="text-[16px] font-medium ml-2">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>

      <li className="text-[16px] font-medium ml-2">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar h-20 bg-[#FFC5C5] top-0 fixed z-20 text-[#DA0037]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            className="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz10RQUyyzdBLystSKLlOEyGKL_jdc9UTQQVPKd_hrhHoNS9WoCa-zm4djg7uCp2rUP70&usqp=CAU"
            alt=""
          />
          <span className="text-3xl">FHW</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
       {user && <div className="dropdown dropdown-end">
          <img
            tabIndex={0}
            role="button"
            className="w-16 h-16 rounded-full border-2 border-pink-800"
            src={user?.photoURL}
            alt=""
          />
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-36"
          >
            <li className="text-[16px] font-medium ">
              <p>{user?.displayName}</p>
            </li>
            <li className="text-[16px] font-medium ">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
