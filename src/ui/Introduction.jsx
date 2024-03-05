import { Container, Divider, Stack, Typography } from "@mui/material";

import { useAbout } from "../hooks/useAbout";
import Spinner from "./Spinner";
import TopBanner from "./TopBanner";
import Heading from "./Heading";

function Introduction() {
  const { about: { title, description, banner, coachTitle } = {}, isLoading } =
    useAbout();

  if (isLoading) return <Spinner />;

  return (
    <>
      <TopBanner banner={banner} />

      <Container maxWidth="xl">
        <Stack pt={12} spacing={8}>
          <Heading content={title} />

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>

          <Divider sx={{ borderColor: "primary.main" }} />

          <Heading content={coachTitle} />
        </Stack>
      </Container>
    </>
  );
}

export default Introduction;
