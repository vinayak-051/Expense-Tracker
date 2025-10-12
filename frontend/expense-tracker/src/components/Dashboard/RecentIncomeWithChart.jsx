import React, { useEffect, useState } from 'react';
import CustomPieChart from '../charts/CustomPieChart';
import { prepareIncomePieChartData } from '../../utils/helper';

const COLORS = ["#875cf5", "#fa2c37", "#ff6900", "#4f39","rgba(159, 225, 17, 0.53)","#4f39f6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(prepareIncomePieChartData(data));
  }, [data]);

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Last 60 Days Income</h5>
      </div>
      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={totalIncome}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;

