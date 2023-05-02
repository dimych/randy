import { useState } from "react"

type TaskType = {
    id: number
    title: string
}

export const  Todolist = (props: any) => {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'breakfast'},
        {id: 2, title: 'learn js'},
    ])

    return (
      <div>
        <button
          onClick={() => {
            const tasksWithNewTask = [
              ...tasks
            ];
            //tasks.push( {id: 3, title: 'new'})
            setTasks(tasksWithNewTask);
          }}
        >
          +
        </button>
        <ul>
          {tasks.map((task) => (
            <li>
              <button
                onClick={() => {
                  const tasksWithoutDeletedTask: TaskType[] = tasks.filter(t => t.id !== task.id);
                  //tasks.push( {id: 3, title: 'new'})
                  setTasks(tasksWithoutDeletedTask);
                }}
              >
                -
              </button>

              <b>{task.title}</b>
            </li>
          ))}
        </ul>
      </div>
    );   
}


// map, filter, props, closure*