import React from "react";
import { Grid, Button } from "@mui/material";

<<<<<<< HEAD
export const CatItem = ({ item,handleSelectedCat }) => {

    return (
        <Grid item xs={3}>
            <Button onClick={()=>handleSelectedCat(item)} variant="contained" color="secondary" fullWidth >{item}</Button>
        </Grid>

    )
}
=======
export const CatItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Button variant="contained" color="secondary" fullWidth>
        {item}
      </Button>
    </Grid>
  );
};
>>>>>>> 57b5660eaa12f247f042ae81a41ef4023b27f70c
