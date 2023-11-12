import React, { useState, useEffect } from "react";
import { CatList } from "./CatList";
import { ProductItem } from "./ProductItem";
import axios from "axios";
import { Grid } from "@mui/material";

export const ProductList = () => {
  const [data, setData] = useState([]);
<<<<<<< HEAD
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
=======

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={12}>
          <CatList />
>>>>>>> 57b5660eaa12f247f042ae81a41ef4023b27f70c
        </Grid>
        {data.map((item) => (
          <ProductItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
