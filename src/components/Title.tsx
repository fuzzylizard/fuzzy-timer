import React from "react";
import { Typography } from "@mui/material";

type Props = {
  text: string
}

function Title({text} : Props) {
  const pink = "#F2617A";

  return (
    <Typography variant="h1" fontSize="2em" fontWeight="bolder" textAlign="center" color={pink}>
      {text}
    </Typography>
  );
}

export default Title;
