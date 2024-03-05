import { useState } from "react";
import { RiTaskFill } from "react-icons/ri";

function CreateTask({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChannge = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");  
    setDueDate("");
    // console.log(todoName, dueDate);
  };

  return (
    <div class="container text-center">
      <form onSubmit={handleAddButtonClicked} class="row">
        <div class="col-sm-6">
          <input
            type="text"
            placeholder="Enter task here"
            value={todoName}
            onChange={handleNameChannge}
          />
        </div>
        <div class="col-sm-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div class="col-sm-2">
          <button
            type="submit"
            class="btn btn-success"
          >
            Add <RiTaskFill />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
