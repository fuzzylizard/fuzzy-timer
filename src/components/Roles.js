import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Roles({ participants }) {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant="body1" color="gray" align="right">Navigator: </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" fontWeight="bold">{participants[0]}</Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="body1" color="gray" align="right">Typist: </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" fontWeight="bold">{participants[1]}</Typography>
      </Grid>

      {participants.slice(2).map((p, index) => (
        <React.Fragment key={index}>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray" align="right">Co-Navigator: </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" fontWeight="bold">{participants[2 + index]}</Typography>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
}
