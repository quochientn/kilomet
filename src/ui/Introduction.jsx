import { Container, Stack, Typography } from "@mui/material";

import { useAbout } from "../hooks/useAbout";
import Spinner from "./Spinner";
import TopBanner from "./TopBanner";

function Introduction() {
  const { about: { title, description, banner } = {}, isLoading } = useAbout();

  if (isLoading) return <Spinner />;

  return (
    <>
      <TopBanner banner={banner} />

      <Container maxWidth="xl">
        <Stack py={12} spacing={8}>
          <Typography variant="h3" align="center" textTransform="uppercase">
            {title}
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>
        </Stack>
      </Container>
    </>
  );
}

export default Introduction;
