import { Box } from "@mui/material";
import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";

function Hero() {
  const { homepage: { title, subTitle, banners } = {}, isLoading } =
    useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Box
      height="100vh"
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${banners[1]}) center no-repeat fixed`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default Hero;
