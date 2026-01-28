import Task from "./Task";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="todo">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
