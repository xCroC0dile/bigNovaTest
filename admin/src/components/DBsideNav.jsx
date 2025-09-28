import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" maxWidth='250px' minWidth='100px'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/dashboard" className="text-decoration-none" style={{ color: 'inherit' }}>
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/stats" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Statistique</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/revenue" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="dollar-sign">Montant</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Mon Profil</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;