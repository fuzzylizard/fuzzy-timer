import React from "react";
import { Button, Tooltip } from "@mui/material";


export default function TimerButton({title, ariaLabel, buttonText, startIcon, handleClick}) {
  const pink = "#F2617A";
  const white = "#EDF1F3";

  return (
    <Tooltip title={title} arrow>
      <Button aria-label={ariaLabel}
              variant="contained"
              size="large"
              onClick={() => handleClick()}
              startIcon={startIcon}
              sx={ [{background: pink, color: white, borderRadius: 50, marginX: 1} , (theme) => ({
                '&:hover': {
                  backgroundColor: white, color: pink
                }
              })] }
      >
        {buttonText}
      </Button>
    </Tooltip>
  );
}
