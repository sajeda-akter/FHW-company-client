import axios from "axios";

const usePublicAxios = () => {
   const publicAxios=axios.create({
    baseURL:"https://assaingment12-category-0004-server-6tm28nylr-sajedaakter16.vercel.app"
   })
   
    return publicAxios
};

export default usePublicAxios;