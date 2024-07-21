import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const CartTable = ({ columns, data }) => {
  return (
    <div className=" rounded-2xl">
      <TableContainer component={Paper} className="rounded-2xl">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === "operations" ? (
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    ) : column.id === "name" ? (
                      <div className="flex gap-2 items-center">
                        <div className="img">
                          <img
                            src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                            height={50}
                            width={50}
                            alt=""
                            className="aspect-square object-cover"
                          />
                        </div>
                        {row[column.id]}
                      </div>
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CartTable;
