import React from "react";
import DBsideNav from "../components/DBsideNav";
import Profile from "../components/Profile";
import Stats from "../components/Stats";
import Revenue from "../components/Revenue";
import Tables from "../components/Tables";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar always on the left */}
      <DBsideNav />

      {/* Main content area */}
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
