import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";
import { PALETTE_COLOR } from "../utils/constant";

const StyledImg = styled("img")`
  height: 100%;
`;

function HomeTraining() {
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
        loop="true"
        autoplay-delay="5000"
        pagination-dynamic-bullets="true"
        style={{
          height: "30rem",
          "--swiper-pagination-color": `${PALETTE_COLOR.red}`,
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
