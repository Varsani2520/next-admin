import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Divider } from "@mui/material";

export default function Settings() {
  const ApiName = localStorage.getItem("ApiName");
  const [alignment, setAlignment] = React.useState(
    ApiName ? ApiName : "ERequirement"
  );

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    localStorage.setItem("ApiName", newAlignment);
  };

  return (
    <div className="p-4 w-[400px]">
        <h1 className="text-2xl font-bold my-2">Settings</h1>
        <Divider />

      <h1 className="mt-4 font-semibold">Select API</h1>
      <div className="mt-3">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          fullWidth
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="ERequirement">eRequirement</ToggleButton>
          <ToggleButton value="EShop">eShop</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
