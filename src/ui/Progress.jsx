import { useState } from "react";
import { Box, LinearProgress } from "@mui/material";
import { DirectionsRunOutlined } from "@mui/icons-material";

function Progress() {
  const [progress, setProgress] = useState(0);

  window.addEventListener("scroll", () => {
    const scrollableHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progressPercentage = Math.round(
      (window.scrollY / scrollableHeight) * 100
    );

    setProgress(progressPercentage);
  });

  return (
    <Box
      width="20%"
      sx={{ position: "relative", display: { md: "block", xs: "none" } }}
      mt={3}
    >
      <LinearProgress variant="determinate" value={progress}></LinearProgress>
      <DirectionsRunOutlined
        sx={{
          position: "absolute",
          top: "-30px",
          left: `${progress - 5}%`,
          color: "primary.main",
        }}
      />
    </Box>
  );
}

export default Progress;
