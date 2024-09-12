import React from "react";
import { Grid, Typography } from "@mui/material";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const pink = "#F2617A";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" fontSize="2em" fontWeight="bolder" textAlign="center" color={pink}>
          Fuzzy Timer
        </Typography>
      </Grid>
      <Timer />
    </Grid>
  );
}

export default App;
