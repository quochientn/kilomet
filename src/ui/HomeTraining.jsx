import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";
import TrainingCarousel from "./TrainingCarousel";

function HomeTraining() {
  const navigate = useNavigate();

  const {
    homepage: { trainingTitle, trainingDescription, trainingImages } = {},
    isLoading,
  } = useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Box bgcolor="gray.light" py={12}>
      <Container maxWidth="xl">
        <Stack spacing={4} mb={8} alignItems="center">
          <Typography variant="h1" textAlign="center">
            {trainingTitle}
          </Typography>

          <Typography variant="body1">{trainingDescription}</Typography>

          <Box>
            <Button
              variant="contained"
              onClick={() => navigate("/training")}
              sx={{
                "&:hover span": {
                  transform: "translateX(5px)",
                  transition: "ease 0.3s",
                },
              }}
            >
              Xem thêm&nbsp;<span>&rarr;</span>
            </Button>
          </Box>
        </Stack>
      </Container>

      <TrainingCarousel images={trainingImages} />
    </Box>
  );
}

export default HomeTraining;
