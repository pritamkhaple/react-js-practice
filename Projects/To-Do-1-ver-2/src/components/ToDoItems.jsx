import TodoItem from "./TodoItem";

const ToDoItems = ({toDoItems, onDeleteClick}) => {
    return (

        <div className="items-container">
            {toDoItems.map(item => <TodoItem taskName={item.name} taskDate={item.datee} onDeleteClick={onDeleteClick}></TodoItem> )}
      </div>

    )
}

export default ToDoItems;