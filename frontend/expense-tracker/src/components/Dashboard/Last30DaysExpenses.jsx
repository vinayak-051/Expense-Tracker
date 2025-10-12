import React, { useEffect, useState } from 'react';
import CustomBarChart from '../charts/CustomBarChart';
import { prepareExpenseChartData } from '../../utils/helper';
import ExpenseTransactions from './ExpenseTransactions';

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(prepareExpenseChartData(data));
  }, [data]);

  return (
    <div className='card col-span-1'>
      <div className='flex items-center justify-between mb-2'>
        <h5 className='text-lg font-semibold'>Last 30 Days Expenses</h5>
      </div>
      <CustomBarChart data={data} />
    </div>
  );
};

export default Last30DaysExpenses;







