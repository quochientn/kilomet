import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { EmojiEventsOutlined } from "@mui/icons-material";

import { useCoach } from "../hooks/useCoach";
import Spinner from "./Spinner";

const StyledImg = styled("img")(
  ({ theme }) =>
    `
    max-width: 20rem;
    border-radius: 10px;
    box-shadow: 0px 10px 20px ${theme.palette.primary.main}, 0px 30px 50px ${theme.palette.secondary.main};
    `
);

const StyledList = styled("li")`
  display: flex;
  gap: 1rem;
`;

function CoachDetail() {
  const {
    coach: {
      name,
      image,
      introduction,
      achievements,
      hm,
      fm,
      oneHundredKm,
      oneHundredMiles,
    } = {},
    isLoading,
  } = useCoach();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Box sx={{ backgroundColor: "gray.light" }}>
        <Container maxWidth="xl">
          <Box
            display="flex"
            flexDirection={{ md: "row", xs: "column" }}
            justifyContent="space-evenly"
            gap={8}
            alignItems="center"
            py={12}
          >
            <Box>
              <StyledImg src={image} alt={name} />
            </Box>

            <Stack spacing={5}>
              <Typography
                variant="h2"
                fontWeight={700}
                textTransform="uppercase"
                textAlign="center"
                color="primary.main"
              >
                {name}
              </Typography>

              <Box display="flex" gap={6}>
                <Stack spacing={3}>
                  <Typography variant="h4">Half Marathon:</Typography>

                  <Typography variant="h4">Marathon:</Typography>

                  <Typography variant="h4">100km:</Typography>

                  <Typography variant="h4">100miles:</Typography>
                </Stack>

                <Stack spacing={3} textAlign="right">
                  <Typography variant="h4">{hm ? hm : "-"}</Typography>

                  <Typography variant="h4">{fm ? fm : "-"}</Typography>

                  <Typography variant="h4">
                    {oneHundredKm ? oneHundredKm : "-"}
                  </Typography>

                  <Typography variant="h4">
                    {oneHundredMiles ? oneHundredMiles : "-"}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid2 container columnSpacing={4} rowSpacing={8} pt={6} pb={12}>
          <Grid2 md={7} xs={12}>
            <Typography variant="h3" mb={3}>
              Giới thiệu
            </Typography>

            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {introduction}
            </Typography>
          </Grid2>

          <Grid2 md={5} xs={12}>
            <Typography variant="h3" mb={2}>
              Thành tích
            </Typography>

            <Box display="flex" flexDirection="column" gap={1} component="ul">
              {achievements?.map((achievement) => (
                <StyledList key={achievement}>
                  <EmojiEventsOutlined sx={{ color: "primary.main" }} />
                  <Typography variant="body1">{achievement}</Typography>
                </StyledList>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export default CoachDetail;
