import React from "react";
import { Grid } from "@mui/material";

export const TableItem = ({ itemHeaders }) => {
  return (
    <React.Fragment>
      {itemHeaders.map((item) => (
        <Grid item xs={12 / itemHeaders.lenght}></Grid>
      ))}
    </React.Fragment>
  );
};
