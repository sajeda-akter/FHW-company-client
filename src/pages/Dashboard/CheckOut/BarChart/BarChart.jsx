import { Tooltip } from "@material-tailwind/react";
import { Bar, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const BarChartEmployee = () => {
    return (
        <div>
            <BarChartEmployee width={730} height={250} >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChartEmployee>
            
        </div>
    );
};

export default BarChartEmployee;