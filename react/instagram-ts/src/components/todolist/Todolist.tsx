import { useState } from "react";
import { Task } from "./Task";
import { TaskType } from "./types";



export const Todolist = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "breakfast" },
    { id: 2, title: "learn js" },
  ]);

  const deleteTask = (taskId: number) => {
    const tasksWithoutDeletedTask: TaskType[] = tasks.filter(
      (t) => t.id !== taskId
    );
    //tasks.push( {id: 3, title: 'new'})
    setTasks(tasksWithoutDeletedTask);
  };

  const addTask = () => {
    const tasksWithNewTask = [...tasks, {id: Math.random(), title: 'new'}];
    //tasks.push( )
    setTasks(tasksWithNewTask);
  };

  return (
    <div>
      <AddForm addCallback={() => {
        addTask()
        console.log('click')
        }} />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

type AddFormPropsType = {
  addCallback: () => void
}
const AddForm = (props: AddFormPropsType) => {
  return <div>
    <button onClick={() => props.addCallback() }>+</button>
  </div>
}






// map, filter, props (data, callbacks), closure*
