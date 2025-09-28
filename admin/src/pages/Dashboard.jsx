import React, { use, useEffect } from "react";
import DBsideNav from "../components/DBsideNav";
import DBTables from "./DBTables";
import { Route, Routes, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Admintoken");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
   
      <DBsideNav />


      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Routes>
   
          <Route path="tables" element={<DBTables />} />
      
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
