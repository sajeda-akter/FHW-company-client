import axios from "axios";
import { useContext } from "react";
// 
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const axiosSecure=axios.create({
    baseURL:'https://assaingment12-category-0004-server.vercel.app'
})
const UseAxiosSecure = () => {
  const {Logout}=useContext(AuthContext)
  const navigate=useNavigate()

    axiosSecure.interceptors.request.use(function (config) {

        const token=localStorage.getItem('access-token')
        console.log('request stopped by interceptors')
        config.headers.authorization=`Bearer ${token}`
        
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      axiosSecure.interceptors.response.use(
        function(response) {
          return response;
        },
        async function(error) {
          const status = error.response.status;
      
          if (status === 401 || status === 403) {
            await Logout();
            navigate('/login');
          }
      
          return Promise.reject(error);
        }
      );
      

      


    return axiosSecure
};

export default UseAxiosSecure;