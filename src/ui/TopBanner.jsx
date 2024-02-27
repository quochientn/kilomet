import { Box } from "@mui/material";

function TopBanner({ banner }) {
  return (
    <Box
      height="100vh"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${banner}) center no-repeat fixed`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default TopBanner;
