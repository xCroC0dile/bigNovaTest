import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Singup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ReferralPage from './pages/ReferralPage';

function App() {
  return (
    <div className="App">
        <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/referral/*" element={<ReferralPage />} />
  

    
      </Routes>

    </div>
  );
}

export default App;
