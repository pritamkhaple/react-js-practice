import { MdAutoDelete } from "react-icons/md";
import style from "./AppName.module.css"


function TodoItem({taskName, taskDate, onDeleteClick}) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6">
          <h3>{taskName}</h3>
        </div>
        <div class="col-sm-4">
          <h3>{taskDate}</h3>
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger" onClick={() => onDeleteClick(taskName)}>
            Delete <MdAutoDelete />
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default TodoItem;
