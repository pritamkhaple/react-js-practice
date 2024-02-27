import AppName from "./components/AppName";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <CreateTask></CreateTask>
      <Tasks></Tasks>
    </center>
  );
}

export default App;
