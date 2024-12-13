import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems,onDeleteClick}) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map(item =>(<TodoItem key={item.name} dueDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick} />))}
      </div>
    </>
  )
}

export default TodoItems
