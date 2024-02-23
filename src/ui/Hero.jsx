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
        pb={10}
        mx="auto"
        sx={{ position: "absolute", zIndex: 5 }}
      >
        <Typography variant="h2" color="white.main" align="center">
          {title}
        </Typography>
      </Box>

      <Box
        height="100vh"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.8)), url(${banners[1]}) center no-repeat fixed`,
          backgroundSize: "cover",
        }}
      ></Box>
      {/* <swiper-container
        loop={true}
        speed={500}
        autoplay={JSON.stringify({ delay: 5000 })}
        style={{ height: "100vh" }}
      >
        {banners.map((banner) => (
          <swiper-slide
            key={banner}
            style={{
              background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.8)), url(${banner}) center no-repeat fixed`,
              backgroundSize: "cover",
            }}
          ></swiper-slide>
        ))}
      </swiper-container> */}
    </>
  );
}

export default Hero;
