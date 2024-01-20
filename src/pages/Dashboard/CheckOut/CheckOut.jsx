import { useLoaderData } from "react-router-dom";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseAxiosSecure from "../../../components/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const CheckOut = () => {
   const usersData=useLoaderData()
   const axiosSecure=UseAxiosSecure()
   const {data:payments=[]}=useQuery({
    queryKey:['payments'],
    queryFn:async()=>{
      const res=await axiosSecure.get('/payment')
      return res.data
    }
   })
   const specificUser=payments.filter(payment=>payment.email ==usersData.email)
 
  const dataWithMonthYear = specificUser.map(item => ({
    ...item,
    monthYear: `${item.month},${item.year}`, // Modify this line based on your actual data structure
  }));






    return (
      <div className="text-center bg-[#E6BAA3] w-8/12 mx-auto mt-32 p-20 shadow-xl rounded-md">
      <div className="max-w-3xl m flex items-center mb-20  gap-12">
        <img src={usersData.image} className="w-52 h-52 rounded" alt="" />
        <div>
          <h1 className="text-[#DA0037] text-3xl font-medium">{usersData.user}</h1>
          <p className="text-[#DA0037] text-xl font-medium">{usersData.role}</p>
        </div>
      </div> 
      <h3  className="text-3xl text-center mt-10 mb-7 font-medium border-y-2 border-gray-400 w-80 py-2 mx-auto">All Employee </h3>
      <ResponsiveContainer width="40%" height="60%">
        <BarChart
          width={50}
          height={100}
          data={dataWithMonthYear}
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthYear" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#82ca9d" activeBar={<Rectangle fill="gray" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div> 
  
    );
};

export default CheckOut;