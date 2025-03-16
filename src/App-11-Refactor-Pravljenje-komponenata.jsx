import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(function(){
    // Skupimo sve zadatke iz localStorage-a pri svakom refresh-u. Sinhronizacija sa spoljnim resursom
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(savedTasks);
  }, []);

  useEffect(function(){
    // Dodajemo nove zadatke u localStorage. Sinhronizacija sa spoljnim resursom
    if(tasks.length > 0){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  function addTask(text){
    const newTask = {id: Date.now(), text, completed: false}; // Napravimo novi zadatak
    setTasks([...tasks, newTask]); // Dodamo novi zadatak u postojece zadatke
  }

  function toggleTaskComplete(id){
    const toggledTasks = tasks.map(
      task => task.id === id ? {...task, completed: !task.completed} : task
      );
    setTasks(toggledTasks);
  }

  function deleteTask(id){
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div>
      <h1>Lista Zadataka</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskComplete={toggleTaskComplete}/>
    </div>
  )
}

export default App
