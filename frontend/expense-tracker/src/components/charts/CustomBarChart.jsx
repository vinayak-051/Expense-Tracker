import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => {
    const colors = ["#875cf5", "#cfbefb", "#ff6b6b", "#48dbfb", "#1dd1a1"];
    return colors[index % colors.length];
  };

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No data available</p>;
  }

  return (
    <div className='bg-white mt-6 border border-gray-200 rounded-lg p-4'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
            formatter={(value) => [`₹${value}`, `Amount`]}
          />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} stroke="#fff" strokeWidth={1} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;















