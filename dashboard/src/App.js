//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Location from './pages/Location';
import Menu from './pages/Menu';
import Login from './pages/Login';
import MenuUser from './pages/MenuUser';



function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menuuser" element={<MenuUser />}></Route>
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;
