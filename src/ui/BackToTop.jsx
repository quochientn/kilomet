import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";

function BackToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Fade in={trigger}>
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: "4rem",
          right: "1.5rem",
          zIndex: 10,
        }}
      >
        <Fab
          sx={{
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <KeyboardArrowUpOutlined sx={{ color: "white.main" }} />
        </Fab>
      </Box>
    </Fade>
  );
}

export default BackToTop;
