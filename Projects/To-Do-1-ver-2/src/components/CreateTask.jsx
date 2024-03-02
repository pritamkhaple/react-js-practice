import { useState } from "react";

function CreateTask({onNewItem}){

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChannge = (event) => {
      setTodoName(event.target.value)
  }

  const handleDateChange = (event) => {
      setDueDate(event.target.value)
  }

  const handleAddButtonClicked = () =>{
    onNewItem={todoName,dueDate}
    setTodoName("");
    setDueDate("");
    console.log(todoName, dueDate);
  }

    return (
        <div class="container text-center">        
        <div class="row">
          <div class="col-sm-6">
            <input type="text" placeholder="Enter task here" value={todoName} onChange={handleNameChannge}/>            
          </div>
          <div class="col-sm-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-success" onClick={handleAddButtonClicked}>
              Add
            </button>
          </div>
        </div>
        </div>
    )
}

export default CreateTask;