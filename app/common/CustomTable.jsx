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
    if (column.field === 'profile' || column.field === "Image") {
      const isRounded = column.field === 'profile';

      return (
        <div className="flex items-center">
          <Avatar
            src={row.profile.imageUrl}
            alt={row.profile.name}
            sx={{
              width: isRounded?40:50,
              height: isRounded?40:50,
              marginRight: 2,
              borderRadius: isRounded ? '50%' : '2px',
            }}
          />
          {column.field === 'profile' && (
            <div>
              <div>{row.profile.name}</div>
              <div>{row.profile.email}</div> 
            </div>
          )}
        </div>
      );
    }
    return row[column.field];
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                sx={{
                  backgroundColor: "#f2f1f6", 
                  fontWeight: 'bold',        
                }}
              >
                {column.headerName}
              </TableCell>
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
