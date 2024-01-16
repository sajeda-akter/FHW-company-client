import axios from "axios";

const usePublicAxios = () => {
   const publicAxios=axios.create({
    baseURL:"http://localhost:5000"
   })
   
    return publicAxios
};

export default usePublicAxios;