import { Box, Typography } from "@mui/material";

import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";

function Hero() {
  const { homepage: { title, banners } = {}, isLoading } = useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        height="100vh"
        width="100%"
        pb={12}
        sx={{ position: "absolute", zIndex: 5 }}
      >
        <Typography variant="h1" color="white.main" align="center" px={3}>
          {title}
        </Typography>
      </Box>

      <Box
        height="100vh"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.8)), url(${banners}) center no-repeat fixed`,
          backgroundSize: "cover",
        }}
      ></Box>
    </>
  );
}

export default Hero;
