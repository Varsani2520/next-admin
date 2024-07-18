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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// pending -> add real time data from api of this provider cart
const rows = [
  createData("Frozen yoghurt", 2, "active", 324),
  createData("Ice cream sandwich", 1, "pending", 237),
  createData("Eclair", 1, "pending", 124),
  createData("Cupcake", 3, "success", 267),
  createData("Gingerbread", 2, "pending", 349),
];

export default function Offers({ provider }) {
  return (
    <div className="m-2">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="flex gap-2 items-center"
                >
                  <div className="img">
                    <img
                      src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                      height={50}
                      width={50}
                      alt=""
                      className="aspect-square object-cover"
                    />
                  </div>
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
