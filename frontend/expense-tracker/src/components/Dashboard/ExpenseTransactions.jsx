import moment from 'moment';
import React from 'react';
import { LuArrowRight, LuHandCoins } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
 const filteredExpenses = transactions


  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="font-bold" />
        </button>
      </div>

      <div className="mt-6">
        {filteredExpenses?.length > 0 ? (
          filteredExpenses.map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon || <LuHandCoins />}
              date={moment(expense.date).format("DD MMM YYYY")}
              amount={expense.amount}
              type="expense"
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No expenses found.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;










