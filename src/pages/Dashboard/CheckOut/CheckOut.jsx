import { useLoaderData } from "react-router-dom";
import BarChartEmployee from "./BarChart/BarChart";

const CheckOut = () => {
    const users=useLoaderData()
    console.log(users)
    return (
        <div className=" bg-slate-200 min-h-screen">

          <div className="max-w-xl">
            <h1>{users.user}</h1>
            <img src={users.image} alt="" />
            <p>{users.role}</p>
          </div>
          <BarChartEmployee/>
        </div>
    );
};

export default CheckOut;