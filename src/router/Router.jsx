import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Register/Login/Login";
import Signup from "../pages/Register/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

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
  }
]);
