import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeBox from "./components/WelcomeBox";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeBox />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
