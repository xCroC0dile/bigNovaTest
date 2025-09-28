import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const paginationModel = { page: 0, pageSize: 5 };

export default function Tables({ rows, columns }) {
  const handleAdminDownload = async () => {
  try {
    const token = localStorage.getItem("Admintoken");
    const response = await fetch("http://localhost:4000/api/referral/downloadall", {
      method: "GET",
      headers: {
        token: token, 
      },
    });

    if (!response.ok) throw new Error("Erreur lors du téléchargement du fichier");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "referrals_admin.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error(error);
  }
};

  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);

  React.useEffect(() => {
    if (!searchText) {
      setFilteredRows(rows);
    } else {
      const lowercased = searchText.toLowerCase();
      setFilteredRows(
        rows.filter((row) =>
          Object.values(row).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(lowercased)
          )
        )
      );
    }
  }, [searchText, rows]);

  return (
    <Paper sx={{ height: 400, width: "100%", p: 2 }}>
      <TextField
        label="Rechercher"
        variant="outlined"
        size="small"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
      <button onClick={handleAdminDownload}>Telecharger</button>
    </Paper>
  );
}
