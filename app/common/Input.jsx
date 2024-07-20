import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const Input = ({ label, fullWidth = false }) => {
  return (
    <div className="mb-4">
      <MuiTextField label={label} fullWidth={fullWidth} variant="outlined" />
    </div>
  );
};

export default Input;
