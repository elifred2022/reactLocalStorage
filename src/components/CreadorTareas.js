import { useState } from "react";

export const CreadorTarea = (props) => {
  // console.log(props); comento para q no salga en consola
  const [newTasks, setNewTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    props.creatNewTask(newTasks);
    localStorage.setItem("task", newTasks);
    setNewTasks("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ingrese nueva tarea"
        onChange={(e) => setNewTasks(e.target.value)}
        value={newTasks}
      ></input>
      <button>guardar tarea</button>
    </form>
  );
};
