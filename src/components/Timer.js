import React, { useRef, useState } from "react";
import useSound from 'use-sound';
import switchSfx from '../sound/magic-mallet-6262.mp3';
import { Grid, Button, Typography, ButtonGroup } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Countdown, { zeroPad } from "react-countdown";
import TimerButton from "./TimerButton";


const SECONDS = 1000;
const MINUTES = 60 * SECONDS;

export default function Timer() {
  const [timerMinutes, setTimerMinutes] = useState(10);

  const clockRef = useRef();

  const [play] = useSound(switchSfx);

  const defaultTimes = [5,6,10,15,20];

  const pink = "#F2617A";
  const white = "#EDF1F3";

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
          <ButtonGroup variant="outlined">
          { defaultTimes.map((time) => {
            return (
              <Button size="large"
                      key={time}
                      onClick={() => setTimerMinutes(time)}
                      sx={ {color: pink, borderColor: pink }}
              >
                {time}
              </Button>
          )}) }
          </ButtonGroup>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" fontSize="35rem" textAlign="center" color={white} sx={{marginTop: -20}}>
          <Countdown date={Date.now() + timerMinutes * MINUTES}
                     ref={clockRef}
                     autoStart={false}
                     onComplete={signalCompletion}
                     renderer={({ minutes, seconds }) => (<span>{minutes}:{zeroPad(seconds)}</span>)}
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" textAlign="center" marginTop="-50px" color={pink} sx={{marginTop: -15}}>

          <TimerButton title="Start timer" ariaLabel="play" buttonText="Play" startIcon={<PlayArrowIcon fontSize="inherit" />} handleClick={handlePlay} />
          <TimerButton title="Pause timer" ariaLabel="pause" buttonText="Pause" startIcon={<PauseIcon fontSize="inherit" />} handleClick={handlePause} />
          <TimerButton title="Reset timer" ariaLabel="reset" buttonText="Reset" startIcon={<ReplayIcon fontSize="inherit" />} handleClick={handleStart} />
          
        </Typography>
      </Grid>
    </>
  );
}
