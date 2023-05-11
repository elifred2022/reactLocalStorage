import { useState } from "react";

export const CreadorTarea = () => {
  const [nuevaTarea, setNuevaTarea] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    localStorage.setItem("task", nuevaTarea);
    setNuevaTarea("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ingrese nueva tarea"
        onChange={(e) => setNuevaTarea(e.target.value)}
        value={nuevaTarea}
      ></input>
      <button>guardar tarea</button>
    </form>
  );
};
