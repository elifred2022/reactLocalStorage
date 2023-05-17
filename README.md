<React.StrictMode>
<App />
</React.StrictMode> en el archivo index.js React.StrictMode lo quito porque uando se refresca quita lo guardado en localstorage\*/

---\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

para guardar en localstorage;
con useefect:
useEffect(() => {
let data = localStorage.getItem("task");
if (data) {
setTasksItems(JSON.parse(data));
}
}, []);
useEffect(() => {
localStorage.setItem("task", JSON.stringify(tasksItems));
}, [tasksItems]);

\***\*-----\*\*\*\***\*\*\***\*\*\*\***---

como duplicar la tabla o separar las tareas pendientes de las hechas;

usando showconpleted; const [showCompleted, setShowCompleted] = useState(false); en app.js

////****\*\*****\*\*****\*\*****

eliminar tareas; en el arhivo VisibilityControl
