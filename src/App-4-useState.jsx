import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [text, setText] = useState('Task 1');
  return (
    <div>
      <h1>To-Do List</h1>
      <form>
        <input
        type='text'
        placeholder='Unesite naziv zadatka'
        value={text}
        />
        <button type='submit'>Dodaj Zadatak</button>
      </form>
    </div>
  )
}

export default App
