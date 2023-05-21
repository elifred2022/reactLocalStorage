import "./App.css";
import { useState, useEffect } from "react";
import { CreadorTarea } from "./components/CreadorTareas";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function creatNewTask(taskName) {
    console.log(taskName);
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <CreadorTarea creatNewTask={creatNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  );
}

export default App;

// https://www.youtube.com/watch?v=sjrK6RA65eQ&t=99s 1:22:00 seccion para dividari las tareas hechas de las no hechas

// usamos bootstrap para los estilos: https://getbootstrap.com/
// libreria npm i bootstrap@5.3.0-alpha3

// para desplegar app en GH pages:
//1. npm run build
// 2. seguir todos los pasos para subir un repo a git esto ya lo eh venido haciendo
// 3. en package.json; debajo de private; "homepage": "http://elifred2022.github.io/reactLocalStorage",
// 4. npm i gh-pages
// 5. en package.json; hacer en scripts debajo de "eject"= "deploy": "gh-pages -d build"
// 6. npm run build
// 7. git add . y git commit -am "update de lo que sea"
// 8. git push origin master
// 6. npm run deploy
