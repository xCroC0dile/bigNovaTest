import React from "react";
import Tables from "../components/Tables";

const AdminReferrals = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
  ];

  const rows = [
    { id: 1, name: "Jon Snow", email: "jon@example.com", phone: "123456", status: "Active" },
    { id: 2, name: "Arya Stark", email: "arya@example.com", phone: "987654", status: "Pending" },
  ];

  return <Tables rows={rows} columns={columns} />;
};

export default AdminReferrals;
