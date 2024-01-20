import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Services = () => {
    const {data:services=[]}=useQuery({
        queryKey:['services'],
        queryFn:async()=>{
         const res=await axios.get('https://assaingment12-category-0004-server-6tm28nylr-sajedaakter16.vercel.app/services')
       
         return res.data
        }
    })
    return (
        <div className="lg:w-10/12 w-11/12 mx-auto mt-32 mb-2">
            <h3  className="text-3xl text-center mt-10 mb-7 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">Our Services</h3>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:grid-cols-2">
            {
         
            services.map(service=><div key={service._id} className="card lg:card-side bg-[#E6BAA3] shadow-xl">
            <figure><img className="lg:h-60 w-full h-52" src={service.image} alt="Album"/></figure>
            <div className="card-body">
              <h2 className="card-title text-[#DA0037] font-bold text-2xl">{service.service}</h2>
              <p>{service.description.slice(0,70)}...</p>
              <div className="card-actions justify-center">
                <button  className="btn text-[#DA0037] w-52 mt-4 border-2 hover:border-[#DA0037] hover:bg-[#FFC5C5] border-[#DA0037] bg-[#FFC5C5]">See More</button>
              </div>
            </div>
          </div>)
            }
           </div>
        </div>
    );
};

export default Services;