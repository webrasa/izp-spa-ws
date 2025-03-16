import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function addTask(text){
    const newTask = {id: Date.now(), text, completed: false}; // Napravimo novi zadatak
    setTasks([...tasks, newTask]); // Dodamo novi zadatak u postojece zadatke
  }

  // console.log('TASKS: ', tasks); // Pratimo unete zadatke

  function handleSubmit(e){
    e.preventDefault();
    if(text.trim()){
      addTask(text); // Pozivamo handler za dodavanje zadataka
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Unesite naziv zadatka'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Dodaj Zadatak</button>
      </form>
      <ul>
        { // JS injection
          tasks.map((task) => { // Koristimo JS funkciju map da prodjemo kroz sve zadatke i prikazemo ih na ekranu
            return (
              <li>
                <span>{task.text}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
