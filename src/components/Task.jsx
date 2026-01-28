function Task({ task, onToggle, onDelete }){

    return (
        <li className="todo_list">
            <input type="checkbox" checked={task.done} onChange={onToggle} />
            <span className={task.done ? "done" : ""}>{task.text}</span>
            <button onClick={onDelete}>Supprimer</button>
        </li>
    );
}
export default Task;