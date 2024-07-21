import React from "react";
import CartTable from "../common/CartTable";
import createData from "../utils/CreateData";

const rows = [
  createData("Frozen yoghurt", 2, "active", 324),
  createData("Ice cream sandwich", 1, "pending", 237),
  createData("Eclair", 1, "pending", 124),
  createData("Cupcake", 3, "success", 267),
  createData("Gingerbread", 2, "pending", 349),
];

const columns = [
  { id: "name", label: "Title" },
  { id: "calories", label: "Quantity", align: "right" },
  { id: "fat", label: "Status", align: "right" },
  { id: "carbs", label: "Price", align: "right" },
  { id: "operations", label: "Operations", align: "right" },
];

const page = () => {
  return <CartTable data={rows} columns={columns} />;
};

export default page;
