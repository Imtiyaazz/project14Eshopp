<<<<<<< HEAD
import React, { useState } from "react";
import { Grid,Card, CardContent, Rating } from "@mui/material";
import axios from "axios";

export const ProductItem=({item})=>{
   
    return(
        <Grid item xs="4">
            <Card align="center" sx={{ bgcolor: "aliceblue" }}>
                <CardContent>
                   <h4>{item.title}</h4> 
                   <h6>{item.description.slice(0,30)}...</h6>
                   <img src={item.image} alt="" /> 
                   <h2>{item.category.toUpperCase()}</h2>
                   <Rating value={item.rating.rate}/>({item.rating.count})
                </CardContent>
            </Card>
        </Grid>
        
    )
}
=======
import React from "react";
import { Grid, Card, CardContent, Rating } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <h4>{item.title}</h4>
          <h6>{item.description}</h6>
          <img src={item.image} alt="" />
          <h2>{item.category}</h2>
          <Rating value={item.rating.rate} /> ({item.rating.count})
        </CardContent>
      </Card>
    </Grid>
  );
};
>>>>>>> 57b5660eaa12f247f042ae81a41ef4023b27f70c
