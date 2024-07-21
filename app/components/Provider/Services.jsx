import * as React from "react";
import CartTable from "@/app/common/CartTable";
import createData from "@/app/utils/CreateData";

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

export default function Services({ provider }) {
  return (
    <div className="m-2">
      <CartTable data={rows} columns={columns} />
    </div>
  );
}
