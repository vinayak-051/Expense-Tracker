import React, { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import CustomBarChart from '../charts/CustomBarChart';
import { prepareIncomeBarChartData } from '../../utils/helper';
import { data } from 'react-router-dom';

const IncomeOverView = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(prepareIncomeBarChartData(transactions));
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your earnings over time and analyze your income trends
          </p>
        </div>
        <button className="add-btn flex items-center gap-1" onClick={onAddIncome}>
          <LuPlus className="text-base" />
          <span>Add income</span>
        </button>
      </div>
      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverView;



