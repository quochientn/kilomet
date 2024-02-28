import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";

const StyledImg = styled("img")`
  height: 100%;
`;

function HomeTraining() {
  const theme = useTheme();
  const {
    homepage: { trainingTitle, trainingDescription, trainingImages } = {},
    isLoading,
  } = useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Box bgcolor="gray.light" py={12}>
      <Container maxWidth="xl">
        <Stack spacing={4} mb={8} alignItems="center">
          <Typography variant="h3">{trainingTitle}</Typography>

          <Typography variant="body1">{trainingDescription}</Typography>

          <Box>
            <Button href="/about">Xem thêm &rarr;</Button>
          </Box>
        </Stack>
      </Container>

      <swiper-container
        free-mode={JSON.stringify({
          enabled: true,
          sticky: true,
        })}
        slides-per-view="auto"
        space-between="5"
        loop="true"
        autoplay-delay="5000"
        pagination-dynamic-bullets="true"
        style={{
          height: "30rem",
          "--swiper-pagination-color": `${theme.palette.primary.main}`,
        }}
      >
        {trainingImages.map((img) => (
          <swiper-slide key={img} style={{ height: "100%", width: "auto" }}>
            <StyledImg src={img} alt="Training" />
          </swiper-slide>
        ))}
      </swiper-container>
    </Box>
  );
}

export default HomeTraining;
