export const VisibilityControl = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Quieres limpiar las tareas hechas?")) {
      cleanTasks();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
        checked={isChecked}
      />
      <label>Mostrar tareas hechas</label>

      <button onClick={handleDelete}>Limpiar</button>
    </div>
  );
};
