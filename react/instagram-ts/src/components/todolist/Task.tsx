import { TaskType } from "./types";


type TaskProps = {
    task: TaskType;
    deleteTask: (id: number) => void
  };
  
export const Task = (props: TaskProps) => {
    return (
      <li>
        <button
          onClick={() => {
            props.deleteTask(props.task.id);
          }}
        >
          -
        </button>
  
        <b>{props.task.title}</b>
      </li>
    );
  };