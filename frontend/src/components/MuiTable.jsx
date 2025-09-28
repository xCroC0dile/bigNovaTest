import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

const paginationModel = { page: 0, pageSize: 5 };

export default function MuiTable({ rows, columns }) {
  const [searchText, setSearchText] = useState("");

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchText.toLowerCase()) ||
    row.email.toLowerCase().includes(searchText.toLowerCase()) ||
    row.phone.includes(searchText)
  );

  return (
    <Paper>
      <TextField
        label="Rechercher"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
      />
    </Paper>
  );
}
