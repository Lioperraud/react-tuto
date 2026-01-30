import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        done: false
      }
    ]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="card">
    <header>
        <h1>Todo List</h1>
    </header>
    <section>
        <div className="add_task">
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nouvelle tâche"
        />
        <button onClick={addTask}>Ajouter</button>
        </div>
        <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        />
    </section>
    </div>
  );
}

export default TodoList;

