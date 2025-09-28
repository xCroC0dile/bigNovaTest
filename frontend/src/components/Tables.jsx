import React, { useContext } from "react";
import MuiTable from "./MuiTable";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Tables = () => {
  const { referrals,fetchReferrals } = useContext(AppContext); 

  // define table columns
  const referralColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
  ];

  // map referrals into rows for DataGrid
  const referralRows = referrals?.map((ref, index) => ({
    id: index + 1,
    name: ref.name,
    email: ref.email,
    phone: ref.phone,
    status: ref.status,
  })) || [];
  useEffect(() => {
    fetchReferrals();
    console.log("logged referrals:",referrals);
  }, []);

  return (
    <div>
      <MuiTable rows={referralRows} columns={referralColumns} />
    </div>
  );
};

export default Tables;
