import React from "react";
import { Grid, Typography } from "@mui/material";
import "./App.css";
import Timer from "./components/Timer";
import thoughtworksImage from './thoughtworks_flamingo_mist.png'

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" fontSize="2em" fontWeight="bolder" textAlign="center" color="#F2617A">
          <img src={thoughtworksImage} alt="logo" width="300px" />
        </Typography>
      </Grid>
      <Timer />
    </Grid>
  );
}

export default App;
