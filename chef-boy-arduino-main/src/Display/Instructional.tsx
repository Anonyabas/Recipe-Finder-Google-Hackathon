import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Instructional() {
  const [currentInstructions, setCurrentInstructions] = useState<string>(
    "This is just a test"
  );

  useEffect(() => {
    setCurrentInstructions("This is testing " + Math.random());
  }, [1000]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        color: "#fff",
      }}
    >
      <Typography variant="h6">{currentInstructions}</Typography>
    </Box>
  );
}
