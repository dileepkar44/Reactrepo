import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "11/09/24",
    },
    {
      name :'Goto college',
      dueDate : '11/09/24'
    },
    {
      name :'Like this',
      dueDate : '11/09/24'
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems  todoItems={todoItems}/>
    </center>
  );
}

export default App;
