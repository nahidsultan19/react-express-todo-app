import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTodo from './Components/AddTodo';
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Register from './Components/Register';
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
        <Route path='/addTodo' element={<PrivateRoute><AddTodo /></PrivateRoute>} />
        <Route path='/update/:id' element={<PrivateRoute><Update /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
