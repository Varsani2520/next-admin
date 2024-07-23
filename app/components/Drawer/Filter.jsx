import * as React from "react";
import { Box, IconButton, Divider, FormControlLabel, Checkbox } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

export default function Filter({ onClose }) {
  return (
    <Box sx={{ width: 400 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'blue',
          color: 'white',
          padding: '16px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FilterListIcon />
          <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>Filter</span>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: '16px', backgroundColor: 'white' }}>
        <FormControlLabel
          control={<Checkbox />}
          label="ID"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Status"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Images"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Type"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Created At"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Operation"
        />
      </Box>
    </Box>
  );
}
