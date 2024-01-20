import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Register/Login/Login";
import Signup from "../pages/Register/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import EmployeeList from "../pages/Dashboard/EmployeeList/EmployeeList";
import HrRouter from "./HrRouter";
import CheckOut from "../pages/Dashboard/CheckOut/CheckOut";
import TestPayment from "../pages/TestPayment/TestPayment";
import Employee from "../pages/Dashboard/Employee/Employee";
import EmployeeForAdmin from "../pages/Dashboard/EmployeeForAdmin/EmployeeForAdmin";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/signup',
        element:<Signup/>
      },
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>
    ,
    children:[
      // only for HR
      {
        path:'employee_list',
        element:<HrRouter><EmployeeList/></HrRouter>
      },
      {
        path:'details/:id',
        loader:({params})=>fetch(`https://assaingment12-category-0004-server.vercel.app/user/${params.id}`),
        element:<CheckOut/>
      },
      
      {
        path:'payment/:id',
        loader:({params})=>fetch(`https://assaingment12-category-0004-server.vercel.app/user/${params.id}`),
        element:<TestPayment/>
      },
      {
        path:'paymenthistory',
        element:<Employee/>
      },
      {
        path:'employees',
        element:<EmployeeForAdmin/>
      }

    ]
 
  }
]);
