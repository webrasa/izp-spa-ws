
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Navbar from './components/Navbar';
// import './styles.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
