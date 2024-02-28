import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { EmojiEventsOutlined } from "@mui/icons-material";

import { useCoach } from "../hooks/useCoach";
import Spinner from "./Spinner";

const StyledImg = styled("img")(
  ({ theme }) =>
    `
    width: 25rem;
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
            justifyContent="space-evenly"
            alignItems="center"
            py={15}
          >
            <Box>
              <StyledImg src={image} alt={name} />
            </Box>

            <Stack spacing={3}>
              <Typography
                variant="h4"
                textTransform="uppercase"
                fontWeight={700}
                color="primary.main"
              >
                {name}
              </Typography>

              <Typography variant="h5">HM: {hm ? hm : "-"}</Typography>

              <Typography variant="h5">FM: {fm ? fm : "-"}</Typography>

              <Typography variant="h5">
                100K: {oneHundredKm ? oneHundredKm : "-"}
              </Typography>

              <Typography variant="h5">
                100M: {oneHundredMiles ? oneHundredMiles : "-"}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid2 container columnSpacing={4} pt={6} pb={12}>
          <Grid2 lg={7}>
            <Typography variant="h5" mb={3}>
              Giới thiệu
            </Typography>

            <Typography variant="body1">{introduction}</Typography>
          </Grid2>

          <Grid2 lg={5}>
            <Typography variant="h5" mb={2}>
              Thành tích
            </Typography>

            <Box display="flex" flexDirection="column" gap={1} component="ul">
              {achievements?.map((a) => (
                <StyledList key={a}>
                  <EmojiEventsOutlined sx={{ color: "primary.main" }} />
                  <Typography variant="body1">{a}</Typography>
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
