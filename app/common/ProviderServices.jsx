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
        <ServiceInfo
          Icon={Email}
          title={"Visiting Charge"}
          desc={"$" + SingleProvider.visiting_charge}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo
          Icon={LocationOn}
          title={"Company Address"}
          desc={SingleProvider.location}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ServiceInfo Icon={People} title={"No Of Members"} desc={SingleProvider.no_of_members} />
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
        <ServiceInfo Icon={Person} title={"Name"} desc={SingleProvider.personal_info.name} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ServiceInfo
          Icon={Phone}
          title={"Phone"}
          desc={SingleProvider.personal_info.contact}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ServiceInfo
          Icon={Email}
          title={"Email"}
          desc={SingleProvider.personal_info.email}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ServiceInfo Icon={Person} title={"Commision"} desc={SingleProvider.personal_info.commision + "%"} />
      </Grid>
    </Grid>
  );
};

export { ProviderServices, PersonalService };
