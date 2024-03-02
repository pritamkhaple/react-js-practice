import AppName from "./components/AppName";
import CreateTask from "./components/CreateTask";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialToDoItems = [
    {
      name: "Do Nothing",
      datee: "01/01/2023",
    },
    {
      name: "Do Something",
      datee: "01/01/2023",
    },
    {
      name: "Do ",
      datee: "01/01/2023",
    },
  ];

  const [toDoItems, setTodoItems] = useState(initialToDoItems);

  const handleNewItem = (taskName, taskDate) => {
    console.log(`New item added: ${taskName} -  Date: ${taskDate}`);
    const newTodoItems = [...toDoItems, { name: taskName, datee: taskDate }];

    setTodoItems(newTodoItems);
  };


  return (
    <center class="todo-container">
      <AppName></AppName>
      <CreateTask onNewItem={handleNewItem}></CreateTask>
      <ToDoItems toDoItems={toDoItems}></ToDoItems>
    </center>
  );
}

export default App;
