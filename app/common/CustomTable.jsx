import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar'; // Import Avatar from Material-UI

const CustomTable = ({ columns, rows }) => {
  const renderCellContent = (column, row) => {
    if (column.field === 'profile') {
      return (
        <div className="flex items-center">
          <Avatar
            src={row.profile.imageUrl} // Assuming imageUrl is part of profile
            alt={row.profile.name}
            sx={{ width: 40, height: 40, marginRight: 2 }}
          />
          <div>
            <div>{row.profile.name}</div>
            <div>{row.profile.email}</div> {/* Assuming email is part of profile */}
          </div>
        </div>
      );
    }
    return row[column.field];
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ background: "#f2f1f6", fontWeight: 'bold' }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.field}>
                  {renderCellContent(column, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
