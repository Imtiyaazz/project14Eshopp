import React from "react";
import { Grid, Button } from "@mui/material";

export const CatItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Button variant="contained" color="secondary" fullWidth>
        {item}
      </Button>
    </Grid>
  );
};
