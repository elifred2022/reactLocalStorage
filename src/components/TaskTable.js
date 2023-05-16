import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ))}
      </tbody>
    </table>
  );
};
