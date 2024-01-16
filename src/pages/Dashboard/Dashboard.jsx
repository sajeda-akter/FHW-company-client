import { Link, Outlet } from "react-router-dom";
import useHR from "../../components/useHR";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Dashboard = () => {
  const [isHr] = useHR();
  const { user } = useContext(AuthContext);

  const menuItem = (
    <>
      {isHr ? (
        <li className="text-[16px] font-medium">
          <Link to="/dashboard/employee_list">Employee List</Link>
        </li>
      ) : (
        <li className="text-[16px] font-medium">
          <Link to="/">Home</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-blue-200 text-blue-900">
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
          <div className="flex-1 px-2 mx-2">FWH</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {menuItem}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
