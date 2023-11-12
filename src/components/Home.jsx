import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, Grid } from "@mui/material";

export const Home = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src={item.image} alt="" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
