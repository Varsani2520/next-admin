import {
  PersonalService,
  ProviderServices,
} from "@/app/common/ProviderServices";
import { Grid } from "@mui/material";
import React from "react";

const Company = ({ provider }) => {
  console.log("recived", provider);
  return (
    <div>
      {provider.map((SingleProvider) => (
        <Grid container>
          <Grid item xs={12} md={8}>
            <div className="company-card bg-white m-2 p-4 rounded-2xl">
              <h1 className="font-semibold">Company Information</h1>

              {/* service provided by company */}
              <div className="service-info">
                <ProviderServices SingleProvider={SingleProvider} />
              </div>

              {/* about company */}
              <h1 className="font-semibold my-4">About company</h1>
              <h1 className="font-semibold my-2">Small Description</h1>
              <h1>{SingleProvider.small_description}</h1>
              <h1 className="font-semibold my-2">Long Description</h1>
              <h1>{SingleProvider.long_description}</h1>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="company-card bg-white p-4 m-2 rounded-2xl">
              <h1 className="font-semibold">Personal Information</h1>

              <div className="service-info">
                <PersonalService SingleProvider={SingleProvider} />
              </div>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Company;
