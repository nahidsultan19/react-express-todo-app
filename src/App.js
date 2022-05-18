import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTodo from './Components/AddTodo';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Update from './Components/Update';
import Header from './Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/addTodo' element={<AddTodo />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
