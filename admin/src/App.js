import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from "react-toastify";
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
        <Routes>
       
        <Route path="/" element={<Login/>} />
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/*" element={<Dashboard/>} />
  
  
    
      </Routes>
    
      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}

export default App;
