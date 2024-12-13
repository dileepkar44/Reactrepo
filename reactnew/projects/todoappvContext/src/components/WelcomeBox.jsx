import React, { useContext } from 'react'
import styles from './WelcomeBox.module.css'
import { TodoItemsContext } from '../store/todo-items-store'



const WelcomeBox = () => {
  const {todoItems} = useContext(TodoItemsContext)
  return (
    <div>
      {todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>}
    </div>
  )
}

export default WelcomeBox
