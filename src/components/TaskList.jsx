import TaskItem from './TaskItem';

function TaskList({tasks, deleteTask, toggleTaskComplete}){

    return(
        <ul>
        { // JS injection
          tasks.map((task) => { // Koristimo JS funkciju map da prodjemo kroz sve zadatke i prikazemo ih na ekranu
            return (
              <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTaskComplete={toggleTaskComplete}/>
            )
          })
        }
      </ul>
    )
}

export default TaskList