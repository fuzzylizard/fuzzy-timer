import React from "react";
import { Grid } from "@mui/material";
import "./App.css";
import Timer from "./components/Timer";
import Title from "./components/Title"

function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title text="Fuzzy Timer" />
      </Grid>
      <Timer />
    </Grid>
  );
}

export default App;
