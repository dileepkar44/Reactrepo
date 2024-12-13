import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeBox from "./components/WelcomeBox";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  // const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`new Item added :' ${itemName} Date:${itemDueDate}`);
    // const newTodoItem = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,
    //   },
    // ];
    // setTodoItems((currentValues) => {
    //   const newTodoItem = [
    //     ...currentValues,
    //     {
    //       name: itemName,
    //       dueDate: itemDueDate,
    //     },
    //   ];
    //   return newTodoItem
    // }); same work will do as below function
    setTodoItems((currentValues) => [
      ...currentValues,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
    // setTodoItems(newTodoItem)
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeBox />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
