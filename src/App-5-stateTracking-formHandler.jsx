import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [text, setText] = useState('Task 1');
  console.log('TEXT: ', text);

  function handleSubmit(e){
    e.preventDefault();
    console.log(text);
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
    </div>
  )
}

export default App
