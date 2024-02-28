import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { useTraning } from "../hooks/useTraining";
import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";
import TopBanner from "./TopBanner";
import TrainingCarousel from "./TrainingCarousel";
import { useTheme } from "@emotion/react";

function TrainingInfo() {
  const theme = useTheme();
  const {
    training: {
      title,
      banner,
      description,
      mapLink,
      facebookGroupLink,
      ctaText,
    } = {},
    isLoading,
  } = useTraning();
  const { homepage: { trainingImages } = {}, isLoading: isLoadingHomepage } =
    useHomepage();

  if (isLoading || isLoadingHomepage) return <Spinner />;

  return (
    <>
      <TopBanner banner={banner} />

      <Container maxWidth="xl">
        <Stack pt={12} spacing={8}>
          <Typography variant="h3" align="center" textTransform="uppercase">
            {title}
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>

          <Box display="flex" justifyContent="center">
            <iframe
              src={mapLink}
              title="Training location"
              width="80%"
              height="500"
            />
          </Box>

          <Divider sx={{ borderColor: "primary.main" }} />
        </Stack>
      </Container>

      <Stack py={8} spacing={8}>
        <Typography variant="h3" align="center" textTransform="uppercase">
          Hoạt động cùng Kilomet
        </Typography>

        <TrainingCarousel images={trainingImages} />
      </Stack>

      <Container maxWidth="md" sx={{ mb: "6rem" }}>
        <Stack
          spacing={3}
          textAlign="center"
          p={4}
          sx={{
            border: `3px solid ${theme.palette.primary.main}`,
            borderRadius: "50px",
          }}
        >
          <Typography variant="h4">{ctaText}</Typography>

          <Box>
            <Button
              variant="contained"
              href={facebookGroupLink}
              target="_blank"
            >
              Tham gia ngay
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default TrainingInfo;
