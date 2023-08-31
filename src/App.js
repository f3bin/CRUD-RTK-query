
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Main from './pages/main/Main';
import NonActive from './components/non-active/NonActive';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='active' element={<Home />} />
        <Route path='non-active' element={<NonActive />} />
      </Route>
    </Routes>

  );
}

export default App;
