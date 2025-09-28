import React from "react";
import DBsideNav from "../components/DBsideNav";
import DBTables from "./DBTables";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
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
