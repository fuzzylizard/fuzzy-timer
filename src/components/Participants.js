import React, { useState } from "react";
import { Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Participants({ setParticipants, editParticipants, setEditParticipants, setTimerMinutes }) {
  const [names, setNames] = useState("");
  const [minutes, setMinutes] = useState("8")

  const minuteOptions = [
    { value: 5, label: "5 minutes"},
    { value: 6, label: "6 minutes"},
    { value: 7, label: "7 minutes"},
    { value: 8, label: "8 minutes"},
    { value: 9, label: "9 minutes"},
    { value: 10, label: "10 minutes"},
    { value: 11, label: "11 minutes"},
    { value: 12, label: "12 minutes"},
  ]

  function handleSubmit(event) {
    event.preventDefault();

    const participants = names.replace(" ", "").split(",");
    setParticipants(participants);
    setTimerMinutes(minutes);

    setEditParticipants(false);
  }

  return (
    <>
      {editParticipants &&
        <Grid item xs={12}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="body1">
              Enter the participants as a comma separated list
            </Typography>
            <TextField
              id="participants"
              label="Participants"
              variant="filled"
              fullWidth
              value={names}
              onChange={event => setNames(event.target.value)}
              sx={{ width: "80%" }}
            />
            <Select id="minute-selector" variant="filled" value={minutes} label="Minutes" onChange={event => setMinutes(event.target.value)}>
              {minuteOptions.map((option) => {
                return <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
              })}
            </Select>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Grid>
      }
    </>
  );
}
