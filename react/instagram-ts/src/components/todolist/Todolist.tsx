import { useState } from "react";
import { Task } from "./Task";
import { TaskType } from "./types";



export const Todolist = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "breakfast", done: false },
    { id: 2, title: "learn js", done: true },
  ]);

  const deleteTask = (taskId: number) => {
    const tasksWithoutDeletedTask: TaskType[] = tasks.filter(
      (t) => t.id !== taskId
    );

    setTasks(tasksWithoutDeletedTask);
  };
  const onDoneChange = (taskId: number, done: boolean) => {
    const tasksWithoutDeletedTask: TaskType[] = tasks.filter(
      (t) => t.id !== taskId
    );
    
    setTasks(tasksWithoutDeletedTask);
  };

  const addTask = (title: string) => {
    const tasksWithNewTask = [...tasks, {id: Math.random(), title: title, done: false}];
    //tasks.push( )
    setTasks(tasksWithNewTask);
  };

  return (
    <div>
      <AddForm addCallback={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task}
           deleteTask={deleteTask}
           onDoneChange={onDoneChange} />
        ))}
      </ul>
    </div>
  );
};

type AddFormPropsType = {
  addCallback: (title: string) => void
}
const AddForm = (props: AddFormPropsType) => {
  const [title, setTitle] = useState("")

  return <div>
    <input value={title} onChange={(event) => {
      setTitle(event.currentTarget.value)
    }} />
    <button onClick={() => props.addCallback(title) }>+</button>
  </div>
}






// map, filter, props (data, callbacks), closure*
