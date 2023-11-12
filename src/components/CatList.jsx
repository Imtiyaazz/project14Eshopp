import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
<<<<<<< HEAD
import axios from "axios";
import { CatItem } from "./CatItem";

export const CatList = ({handleSelectedCat}) => {
    const [data, setData] = useState([]);
    const getData= async()=>{
        const result = await axios.get("https://fakestoreapi.com/products/categories")
        setData(result.data)
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        data.map((item)=>
                            <CatItem item={item} handleSelectedCat={handleSelectedCat}/>
                        )


                    }
                </Grid>
            </CardContent>
        </Card>

    )
}
=======
import { CatItem } from "./CatItem";
import axios from "axios";

export const CatList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <CatItem item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
>>>>>>> 57b5660eaa12f247f042ae81a41ef4023b27f70c
