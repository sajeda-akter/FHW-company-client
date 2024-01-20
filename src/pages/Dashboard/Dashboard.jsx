import { Link, Outlet } from "react-router-dom";
import useHR from "../../components/useHR";
import useAdmin from "../../components/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useEmployee from "../../components/useEmpolyee";

const Dashboard = () => {
  const [isHr] = useHR();
  const [isAdmin] = useAdmin();
  const [isEmployee]=useEmployee()
  const {user}=useContext(AuthContext)

  const menuItem = (
    <>
    {/* only for HR */}
      {isHr && (
     <>
        <li className="text-[16px] font-medium ">
          <Link to="/dashboard/employee_list">Employee List</Link>
        </li>
        <li className="text-[16px] font-medium me-52">
        <Link to="/">Home</Link>
      </li>
     </>
      )}

      {/* only for admin */}
      {isAdmin && (
       <>
        <li className="text-[16px] font-medium">
          <Link to="/dashboard/employees">Employees</Link>
        </li>
        <li className="text-[16px] font-medium me-52">
          <Link to="/">Home</Link>
        </li>
       </>
      )}

{
  isEmployee && <>
  
  <li className="text-[16px] font-medium">
          <Link to="/dashboard/paymenthistory">payment History</Link>
        </li>
        <li className="text-[16px] font-medium me-52">
          <Link to="/">Home</Link>
        </li>
  </>
}
      
    </>
  );

  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="w-full navbar bg-[#FFC5C5] text-[#DA0037]">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-3xl font-bold">
          <img
            className="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz10RQUyyzdBLystSKLlOEyGKL_jdc9UTQQVPKd_hrhHoNS9WoCa-zm4djg7uCp2rUP70&usqp=CAU"
            alt=""
          />
            <span className="ml-2">Fly High Wings</span></div>
          <div className="flex-none  hidden lg:block">
            <ul className="menu menu-horizontal" >
              {/* Navbar menu content here */}
              {menuItem}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side" id="drawer">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul   className="menu p-4 w-52 min-h-full mt-16  bg-base-200">
          {/* Sidebar content here */}
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
