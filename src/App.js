import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Header from './Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
