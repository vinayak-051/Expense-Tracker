import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{' '}
            <span className="text-sm font-medium text-gray-900">
              ₹{payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="">
      <ResponsiveContainer width="100%" height={300}>
<AreaChart
  data={data}
  margin={{ top: 10, right: 30, left: 20, bottom: 0 }} 
>

    <defs>
      <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#b31d1dff" stopOpacity={0.4} />
        <stop offset="95%" stopColor="#de1717ff" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid stroke="none" />
    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#555' }} padding={{ left: 20, right: 0 }} />
    <YAxis tick={{ fontSize: 12, fill: '#555' }} />
    <Tooltip content={<CustomTooltip />} />
    <Area
      type="monotone"
      dataKey="amount"
      stroke="#f90404ff"
      fill="url(#incomeGradient)"
    />
  </AreaChart>
</ResponsiveContainer>

    </div>
  );
};

export default CustomLineChart;
