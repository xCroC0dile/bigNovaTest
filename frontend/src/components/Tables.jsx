import React, { useContext, useEffect } from "react";
import MuiTable from "./MuiTable";
import { AppContext } from "../context/AppContext";
import { Paper, Typography } from "@mui/material";

const Tables = () => {
  const { referrals, fetchReferrals } = useContext(AppContext);

  // Columns with basic styling
  const referralColumns = [
    { field: "id", headerName: "Num", width: 70 },
    { field: "name", headerName: "Nom", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Téléphone", width: 150 },
    { field: "status", headerName: "Statut", width: 120 },
  ];

  // Map referrals into rows for DataGrid
  const referralRows =
    referrals?.map((ref, index) => ({
      id: index + 1,
      name: ref.name,
      email: ref.email,
      phone: ref.phone,
      status: ref.status,
    })) || [];

  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        margin: "20px auto",
        maxWidth: "95%",
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: 2, color: "#333", fontWeight: 600 }}
      >
        Liste des referrals
      </Typography>
      <MuiTable
        rows={referralRows}
        columns={referralColumns}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1976d2",
            color: "#fff",
            fontWeight: 600,
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#e3f2fd",
          },
        }}
      />
    </Paper>
  );
};

export default Tables;
