import React, { useState, useEffect } from "react";
import { CatList } from "./CatList";
import { ProductItem } from "./ProductItem";
import axios from "axios";
import { Grid } from "@mui/material";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [selCat, setSelCat] = useState("jewelery");

  const getData = async () => {
    const result = await axios.get(
      `https://fakestoreapi.com/products/category/${selCat}`
    );
    setData(result.data);
  };

  const handleSelectedCat = (cat) => {
    setSelCat(cat);
  };
  useEffect(() => {
    getData();
  }, [selCat]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CatList handleSelectedCat={handleSelectedCat} />
        </Grid>
        {data.map((item) => (
          <ProductItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
