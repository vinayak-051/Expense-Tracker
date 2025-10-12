import React from 'react';
import {
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
  LuUtensils,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const isIncome = type === 'income';
  const amountColor = isIncome ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500';
  

  const safeAmount = typeof amount === 'number' ? amount : parseFloat(amount);
  const formattedAmount = isNaN(safeAmount)
    ? isIncome ? '+ —' : '– —'
    : `${isIncome ? '+' : '–'}${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(Math.abs(safeAmount))}`;

  return (
    <div className='group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60'>
      <div className='w-12 h-12 flex items-center justify-center text-xl text-white bg-gray-400 rounded-full'>
        {icon ? (
          typeof icon === 'string' ? (
            <img src={icon} alt={title} className='w-6 h-6' />
          ) : (
            icon
          )
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className='flex-1 flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-700 font-medium'>{title}</p>
          <p className='text-xs text-gray-400 mt-1'>{date}</p>
        </div>

        <div className='flex items-center gap-2'>
          {!hideDeleteBtn && (
            <button
              className='text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
              onClick={onDelete}
            >
              <LuTrash2 size={18} />
            </button>
          )}

          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${amountColor} `}>
            <h6 className='text-xs font-medium'>{formattedAmount}</h6>
            {isIncome ? <LuTrendingUp /> : <LuTrendingDown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;

