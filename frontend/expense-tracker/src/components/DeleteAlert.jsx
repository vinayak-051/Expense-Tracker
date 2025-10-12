import React from 'react'

const DeleteAlert = ({contents, onDelete}) => {
  return (
    <div>
      <p className='text-sm'>{contents}</p>

      <div className='flex justify-end mt-6'>
        <button
        typr="button"
        className='add-btn add-btn-fill'
        onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert