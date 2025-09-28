import React, { useEffect } from "react";
import DBsideNav from "../components/DBsideNav";
import Profile from "../components/Profile";
import Stats from "../components/Stats";
import Revenue from "../components/Revenue";
import Tables from "../components/Tables";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
  }, []);
  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <DBsideNav />

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Routes>
          <Route path="stats" element={<Stats />} />
          <Route path="tables" element={<Tables />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
