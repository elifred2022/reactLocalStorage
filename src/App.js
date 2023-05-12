import "./App.css";
import { useState } from "react";
import { CreadorTarea } from "./components/CreadorTareas";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "mi primer tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercer tarea", done: false },
  ]);

  function creatNewTask(taskName) {
    console.log(taskName);
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])
  }

  return (
    <div className="App">
      <CreadorTarea creatNewTask={creatNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tarea</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=sjrK6RA65eQ&t=99s 20:00. vi la explicacion pero no lo codifique

// ojo no hice commit ni  push
