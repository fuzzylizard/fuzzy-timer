import React, { useRef, useState } from "react";
import useSound from 'use-sound';
import switchSfx from '../sound/magic-mallet-6262.mp3';
import { Grid, Button, Tooltip, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Countdown, { zeroPad } from "react-countdown";

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;

export default function Timer() {
  const [timerMinutes, setTimerMinutes] = useState(10);

  const clockRef = useRef();

  const [play] = useSound(switchSfx);

  const defaultTimes = [5,6,10,15,20]

  function handleStart() {
    clockRef.current.stop();
    clockRef.current.start();
  }

  function handlePlay() {
    clockRef.current.start();
  }

  function handlePause() {
    clockRef.current.pause();
  }

  function signalCompletion() {
    play();
  }

  return (
    <>
      <Grid item xs={12}>
        <div style={ {textAlign: "center", marginTop: "2rem"} }>
          { defaultTimes.map((time) => {
              return (
              <Button aria-label="pause"
                    size="large"
                    key={time}
                    variant="outlined"
                    onClick={() => setTimerMinutes(time)}
                    sx={ {color: "#F2617A", borderColor: "#F2617A" }}
              >
                {time}
              </Button>
          )}) }
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" fontSize="35rem" textAlign="center" color="#EDF1F3" sx={{marginTop: -20}}>
          <Countdown date={Date.now() + timerMinutes * MINUTES}
                     ref={clockRef}
                     autoStart={false}
                     onComplete={signalCompletion}
                     renderer={({ minutes, seconds }) => (<span>{minutes}:{zeroPad(seconds)}</span>)}
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" textAlign="center" marginTop="-50px" color="#F2617A" sx={{marginTop: -15}}>
          <Tooltip title="Start timer" arrow>
            <Button aria-label="play"
                    variant="contained"
                    size="large"
                    onClick={handlePlay}
                    startIcon={<PlayArrowIcon fontSize="inherit" />}
                    sx={ {background: "#F2617A", color: "#EDF1F3", borderRadius: 50} }
            >
              Play
            </Button>
          </Tooltip>
          <Tooltip title="Pause timer" arrow>
            <Button aria-label="pause"
                    size="large"
                    onClick={handlePause}
                    startIcon={<PauseIcon fontSize="inherit" />}
                    sx={ {background: "#F2617A", color: "#EDF1F3", borderRadius: 50, marginX: 2} }
            >
              Pause
            </Button>
          </Tooltip>
          <Tooltip title="Reset the timer and start" arrow>
            <Button aria-label="replay"
                    size="large"
                    onClick={handleStart}
                    startIcon={<ReplayIcon fontSize="inherit" />}
                    sx={ {background: "#F2617A", color: "#EDF1F3", borderRadius: 50} }
            >
              Reset
            </Button>
          </Tooltip>
        </Typography>
      </Grid>
    </>
  );
}
