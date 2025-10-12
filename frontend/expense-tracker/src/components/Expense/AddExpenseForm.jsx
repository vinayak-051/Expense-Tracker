import React, { useState } from 'react';
import Input from '../inputs/input';
import EmojiPickerPopup from '../inputs/EmojiPickerPopup';

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: '',
    amount: '',
    date: '',
    icon: '',
  });

  const handleChange = (key, value) => {
    setExpense(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
      />

      <div>
        <Input
          value={expense.category}
          onChange={({ target }) => handleChange('category', target.value)}
          label="Expense Category"
          placeholder="groceries, rent, travel, etc."
          type="text"
        />
        <Input
          value={expense.amount}
          onChange={({ target }) => handleChange('amount', target.value)}
          label="Amount"
          placeholder="Enter amount"
          type="number"
        />
        <Input
          value={expense.date}
          onChange={({ target }) => handleChange('date', target.value)}
          label="Date"
          placeholder="Select date"
          type="date"
        />
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="add-btn add-btn-fill"
            onClick={() => onAddExpense(expense)}
          >
            Add expense
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpenseForm;


