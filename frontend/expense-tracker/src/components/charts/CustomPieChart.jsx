import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import CustomLegend from './CustomLegend';

const CustomPieChart = ({ data, label, totalAmount, colors, showTextAnchor }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No data available</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
          formatter={(value, name, props) => [`₹${value}`, props.payload.name]}
        />
        <Legend content={CustomLegend} />
        {showTextAnchor && (
          <>
            <text x="50%" y="50%" dy={-25} textAnchor="middle" fill="#666" fontSize="14px">
              {label}
            </text>
            <text x="50%" y="50%" dy={8} textAnchor="middle" fill="#333" fontSize="24px" fontWeight="600">
              ₹{totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;



