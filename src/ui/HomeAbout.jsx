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

const StyledImg = styled("img")`
  width: 100%;
`;

function HomeAbout() {
  const {
    homepage: { aboutTitle, aboutDescription, aboutImage } = {},
    isLoading,
  } = useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="xl" component="section">
      <Box display="flex" gap={8} py={12}>
        <Box>
          <StyledImg src={aboutImage} alt="Kilomet coaches" />
        </Box>

        <Stack spacing={4} mt={6}>
          <Typography variant="h3">{aboutTitle}</Typography>

          <Typography variant="body1">{aboutDescription}</Typography>

          <Box>
            <Button href="/about">Xem thêm &rarr;</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default HomeAbout;
