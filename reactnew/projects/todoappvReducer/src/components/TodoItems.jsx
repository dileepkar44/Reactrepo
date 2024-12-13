import React, { useContext }  from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/todo-items-store'

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext)
  return (
    <>
      <div className="items-container">
        {todoItems.map(item =>(<TodoItem key={item.name} dueDate={item.dueDate} todoName={item.name}  />))}
      </div>
    </>
  )
}

export default TodoItems
