<React.StrictMode>
<App />
</React.StrictMode> en el archivo index.js React.StrictMode lo quito porque uando se refresca quita lo guardado en localstorage\*/

---**********************\*\*\***********************

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
