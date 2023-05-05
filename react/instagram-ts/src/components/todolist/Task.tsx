import { TaskType } from "./types";


type TaskProps = {
    task: TaskType;
    deleteTask: (id: number) => void
    onDoneChange: (id: number, done: boolean) => void
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
        <input type="checkbox"
         checked={props.task.done} 
        onChange={(event) => {
          props.onDoneChange(props.task.id, event.currentTarget.checked)
    
        }} />
      </li>
    );
  };