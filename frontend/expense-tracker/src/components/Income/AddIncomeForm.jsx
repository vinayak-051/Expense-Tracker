import React, { useState } from 'react'
import Input from '../inputs/input'
import EmojiPickerPopup from '../inputs/EmojiPickerPopup'

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: '',
    amount: '',
    date: '',
    icon: '',
  })

  const handleChange = (key, value) => {
    setIncome(prev => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
      />

      <div>
        <Input
          value={income.source}
          onChange={({ target }) => handleChange('source', target.value)}
          label="Income Source"
          placeholder="freelance, salary, etc."
          type="text"
        />
        <Input
          value={income.amount}
          onChange={({ target }) => handleChange('amount', target.value)}
          label="Amount"
          placeholder="Enter amount"
          type="number"
        />
        <Input
          value={income.date}
          onChange={({ target }) => handleChange('date', target.value)}
          label="Date"
          placeholder="Select date"
          type="date"
        />
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="add-btn add-btn-fill"
            onClick={() => onAddIncome(income)}
          >
            Add income
          </button>
        </div>
      </div>
    </>
  )
}

export default AddIncomeForm


