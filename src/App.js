import "./App.css";
import { useState, sueEffect, useEffect } from "react";
import { CreadorTarea } from "./components/CreadorTareas";
import { TaskTable } from "./components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([
    {
      name: "tarea uno",
      done: true,
    },
  ]);

  function creatNewTask(taskName) {
    console.log(taskName);
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <CreadorTarea creatNewTask={creatNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=sjrK6RA65eQ&t=99s 1:01:00 seccion para dividari las tareas hechas de las no hechas
