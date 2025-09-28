import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Singup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ReferralPage from './pages/ReferralPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from "react-toastify";
import AdminAuth from './pages/AdminAuth';


function App() {
  return (
    <div className="App">
     
    <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/r/:ID" element={<ReferralPage />} />
  
    
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}

export default App;
