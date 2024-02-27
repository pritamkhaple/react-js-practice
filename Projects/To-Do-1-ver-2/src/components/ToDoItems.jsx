import TodoItem from "./TodoItem";

const ToDoItems = ({toDoItems}) => {
    return (

        <div className="items-container">
            {toDoItems.map(item => <TodoItem taskName={item.name} taskDate={item.datee}></TodoItem> )}
      </div>

    )
}

export default ToDoItems;