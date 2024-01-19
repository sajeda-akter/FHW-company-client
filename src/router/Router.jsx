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
import PaymentCheck from "../pages/Dashboard/EmployeeList/PayModal/PaymentCheck/PaymentCheck";
import TestPayment from "../pages/TestPayment/TestPayment";
import Employee from "../pages/Dashboard/Employee/Employee";
import EmployeeForAdmin from "../pages/Dashboard/EmployeeForAdmin/EmployeeForAdmin";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`),
        element:<CheckOut/>
      },
      
      {
        path:'payment/:id',
        loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`),
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
