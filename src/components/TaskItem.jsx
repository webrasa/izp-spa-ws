import './taskItem.css';

function TaskItem({task, deleteTask, toggleTaskComplete}){
    return (
        <li key={task.id}> {/*Ako je zadatak zavrsen precrtaj ga*/}
            <span className={task.completed ? 'task-item completed' : 'task-item'} 
            onClick={() => toggleTaskComplete(task.id)}>
                {task.text}
            </span> {/*Obrisi zadatak sa liste*/}
            <button onClick={() => deleteTask(task.id)}>Obriši</button>
        </li>
    );
}

export default TaskItem;