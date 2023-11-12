import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { TableItem } from "./TableItem";

export const TableList = () => {
  const obj = { id: "1", name: "user22", age: "26", work: "programmer" };
  const [itemHeaders, setItemHeaders] = useState([]);

  useEffect(() => {
    const keys = Oject.keys(obj);
    setItemHeaders(keys);
  }, []);
  return (
    <Grid container spacing={2}>
      <TableItem itemHeaders={itemHeaders} />
    </Grid>
  );
};
