import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./App.css";
import Participants from "./components/Participants";
import Roles from "./components/Roles";
import Timer from "./components/Timer";

function App() {
  const [participants, setParticipants] = useState([]);
  const [editParticipants, setEditParticipants] = useState(true);
  const [timerMinutes, setTimerMinutes] = useState(8);

  function handleNext() {
    const firstElement = participants.shift();
    const list = [...participants];
    list.push(firstElement);
    setParticipants(list);
  }

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h1" fontSize="2em" fontWeight="bolder">Ensemble Pairing Timer</Typography>
        </Grid>
        <Grid item xs={4}>
          {!editParticipants &&
            <Button variant="text" onClick={() => setEditParticipants(true)}>
              Edit
            </Button>
          }
        </Grid>
        <Participants
          setParticipants={setParticipants}
          editParticipants={editParticipants}
          setEditParticipants={setEditParticipants}
          setTimerMinutes={setTimerMinutes} />
        <Roles participants={participants} />
        <Timer handleNext={handleNext} tMinutes={timerMinutes} />
      </Grid>
    </Container>
  );
}

export default App;
