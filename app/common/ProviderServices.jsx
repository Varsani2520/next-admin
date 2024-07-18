import React from "react";
import {
  Business,
  Email,
  EventAvailable,
  LocationOn,
  People,
  Person,
  Phone,
} from "@mui/icons-material";
import ServiceInfo from "./ServiceInfo";
import { Grid } from "@mui/material";

const ProviderServices = ({ SingleProvider }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <ServiceInfo
          Icon={Business}
          title={"Company"}
          desc={SingleProvider.title}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo Icon={Email} title={"Type"} desc={"Individual"} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo Icon={Email} title={"Visiting Charge"} desc={"$25"} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo
          Icon={LocationOn}
          title={"Company Address"}
          desc={SingleProvider.location}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo Icon={People} title={"No Of Members"} desc={"0"} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo
          Icon={EventAvailable}
          title={"Advance Booking Days"}
          desc={"10"}
        />
      </Grid>
    </Grid>
  );
};

const PersonalService = ({ SingleProvider }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <ServiceInfo Icon={Person} title={"Name"} desc={"Provider"} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ServiceInfo
          Icon={Phone}
          title={"Phone"}
          desc={SingleProvider.contact}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ServiceInfo Icon={Email} title={"Email"} desc={SingleProvider.provider_email} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ServiceInfo Icon={Person} title={"Commision"} desc={"10%"} />
      </Grid>
    </Grid>
  );
};

export { ProviderServices, PersonalService };
