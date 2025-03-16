import TaskItem from './TaskItem';

function TaskList({children}){

    return(
        <ul>
        { // JS injection
          children
        }
      </ul>
    )
}

export default TaskList