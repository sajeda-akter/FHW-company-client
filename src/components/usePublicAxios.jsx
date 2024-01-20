import axios from "axios";

const usePublicAxios = () => {
   const publicAxios=axios.create({
    baseURL:"https://assaingment12-category-0004-server.vercel.app"
   })
   
    return publicAxios
};

export default usePublicAxios;