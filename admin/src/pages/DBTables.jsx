import React, { useState, useEffect } from "react";
import Tables from "../components/Tables";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Select, MenuItem } from "@mui/material";

const AdminReferrals = () => {
  const [rows, setRows] = useState([]);
  const serverUrl = "http://localhost:4000";
  const token = localStorage.getItem("Admintoken");

  // get all referrals
  const fetchReferrals = async () => {
    try {
      const { data } = await axios.get(`${serverUrl}/api/referral/all`, {
        headers: { token },
      });
      if (data.success) {
        const mappedRows = data.referrals.map((r) => ({
          id: r._id.toString(),
          name: r.name,
          email: r.email,
          phone: r.phone,
          status: r.status,
          sponsor: r.userId?.name,
          sponsorEmail: r.userId?.email,
        }));
        setRows(mappedRows);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Échec du chargement des referrals");
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  // update status of a referral
  const handleStatusChange = async (id, newStatus) => {
    try {
      const { data } = await axios.put(
        `${serverUrl}/api/referral/update/${id}`,
        { status: newStatus },
        { headers: { token } }
      );
      if (data.success) {
        toast.success("Statut mis à jour avec succès");
        fetchReferrals();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Échec de la mise à jour du statut");
    }
  };

  // Delete a referral
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${serverUrl}/api/referral/delete/${id}`,
        { headers: { token } }
      );
      if (data.success) {
        toast.success("Referral supprimé avec succès");
        fetchReferrals();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Échec de la suppression du referral");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nom", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Téléphone", width: 150 },
    {
      field: "status",
      headerName: "Statut",
      width: 150,
      renderCell: (params) => (
        <Select
          value={params.row.status || "En attente"}
          onChange={(e) => handleStatusChange(params.row.id, e.target.value)}
          size="small"
          style={{
            backgroundColor:
              params.row.status === "Validé"
                ? "#d4edda"
                : params.row.status === "Rejeté"
                ? "#f8d7da"
                : "#fff3cd",
            color:
              params.row.status === "Validé"
                ? "#155724"
                : params.row.status === "Rejeté"
                ? "#721c24"
                : "#856404",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          <MenuItem value="En attente">En attente</MenuItem>
          <MenuItem value="Validé">Validé</MenuItem>
          <MenuItem value="Rejeté">Rejeté</MenuItem>
        </Select>
      ),
    },
    { field: "sponsor", headerName: "Parrain", width: 150 },
    { field: "sponsorEmail", headerName: "Email du Parrain", width: 180 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ fontWeight: "bold" }}
          onClick={() => handleDelete(params.row.id)}
        >
          Supprimer
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Liste des prospecs</h2>
      <Tables rows={rows} columns={columns} />
    </div>
    
  );
};

export default AdminReferrals;
