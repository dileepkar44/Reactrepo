import { createContext, useReducer } from "react";


export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
  });

  const todoItemsReducer = ( currentTodoItems, action) => {
    let newTodoItem = currentTodoItems;
    if ( action.type === 'NEW_ITEM'){
       newTodoItem = [
            ...currentTodoItems,
            {
              name: action.payload.itemName,
              dueDate: action.payload.itemDueDate,
            },
          ];
      
    }else if(action.type === 'DELETE_ITEM'){
       newTodoItem = currentTodoItems.filter((item) => item.name !== action.payload.itemName);
    }
  return newTodoItem;
  }


  const TodoItemsContextProvider = ({children}) => {
    const [todoItems , dispatchTodoItems ] = useReducer(todoItemsReducer , [])
    const addNewItem = (itemName, itemDueDate) => {
      const newItemAction = {
        type : 'NEW_ITEM',
        payload:{
          itemName,
          itemDueDate
        }
      }
      dispatchTodoItems(newItemAction)
    };
  
    const deleteItem = (todoItemName) => {
      const deleteAction = {
        type : 'DELETE_ITEM',
        payload:{
          itemName : todoItemName,
        }
      }
      dispatchTodoItems(deleteAction)
    };

    return  <TodoItemsContext.Provider
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}
  >{children}</TodoItemsContext.Provider>
  }

  export default TodoItemsContextProvider;