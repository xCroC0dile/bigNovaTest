import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Singup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
  

    
      </Routes>

    </div>
  );
}

export default App;
