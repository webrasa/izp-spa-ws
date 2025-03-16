import { useState } from "react";

function TaskForm({addTask}){
   const [text, setText] = useState('');


    function handleSubmit(e){
        e.preventDefault();
        if(text.trim()){
          addTask(text); // Pozivamo handler za dodavanje zadataka
          setText('');
        }
      }

      return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Unesite naziv zadatka'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>Dodaj Zadatak</button>
        </form>
      )

}

export default TaskForm;