import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

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

  // console.log('TASKS: ', tasks); // Pratimo unete zadatke

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

  function handleSubmit(e){
    e.preventDefault();
    if(text.trim()){
      addTask(text); // Pozivamo handler za dodavanje zadataka
    }
  }

  return (
    <div>
      <h1>Lista Zadataka</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Unesite naziv zadatka' value={text} onChange={(e) => setText(e.target.value)}
      />
        <button type='submit'>Dodaj Zadatak</button>
      </form>
      <ul>
        { // JS injection
          tasks.map((task) => { // Koristimo JS funkciju map da prodjemo kroz sve zadatke i prikazemo ih na ekranu
            return (
              <li key={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}> {/*Ako je zadatak zavrsen precrtaj ga*/}
                <span onClick={() => toggleTaskComplete(task.id)}>{task.text}</span> {/*Obrisi zadatak sa liste*/}
                <button onClick={() => deleteTask(task.id)}>Obriši</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
