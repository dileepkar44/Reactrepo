import {  useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
//useState,

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext)
  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate] = useState('');
  const todoNameElement = useRef()
  const dueDateElement = useRef()
  // const handleName = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1
  // };
  // const handleDate = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of updates are : ${noOfUpdates.current}`)
  // };

  const handleAddBtnClicked =(event)=>{
    event.preventDefault()
    const todoName = todoNameElement.current.value;
    todoNameElement.current.value = ''

    const dueDate = dueDateElement.current.value
    dueDateElement.current.value = ''
    // console.log(`name: ${todoName} dueDate: ${dueDate}`)
    // console.log(event)
    addNewItem(todoName,dueDate)
    // setDueDate('')
    // setTodoName('')

  }
  return (
    <div className="container">
      <form className="row kg-row"  onSubmit={handleAddBtnClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="enter todo hre"
            // onChange={handleName}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          {" "}
          <input
           type="date"
           ref={dueDateElement}
          //  onChange={handleDate} 
          //  value={dueDate} 
           />
        </div>
        <div className="col-2">
          <button
          type="submit"
            // type="button"
            className="btn btn-success kg-button"
            // onClick={handleAddBtnClicked}
          >
         <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
