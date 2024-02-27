import AppName from "./components/AppName";
import CreateTask from "./components/CreateTask";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  const toDoItems = [
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

  return (
    <center class="todo-container">
      <AppName></AppName>
      <CreateTask></CreateTask>
      <ToDoItems toDoItems={toDoItems}></ToDoItems>
      
    </center>
  );
}

export default App;
