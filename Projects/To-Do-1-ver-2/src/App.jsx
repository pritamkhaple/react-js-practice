import AppName from "./components/AppName";
import CreateTask from "./components/CreateTask";
import ToDoItems from "./components/ToDoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialToDoItems = [
  //   {
  //     name: "Do Nothing",
  //     datee: "01/01/2023",
  //   },
  //   {
  //     name: "Do Something",
  //     datee: "01/01/2023",
  //   },
  //   {
  //     name: "Do ",
  //     datee: "01/01/2023",
  //   },
  // ];

  const [toDoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} -  Date: ${itemDueDate}`);
    const newTodoItems = [...toDoItems, { name: itemName, datee: itemDueDate }];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = toDoItems.filter (item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`item deletd ${todoItemName}`);
  }

  return (
    <center class="todo-container">
      <AppName></AppName>
      <CreateTask onNewItem={handleNewItem}></CreateTask>
      {toDoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <ToDoItems toDoItems={toDoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
    </center>
  );
}

export default App;
