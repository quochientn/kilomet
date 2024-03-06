import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";

const StyledImg = styled("img")`
  width: 100%;
`;

function HomeAbout() {
  const navigate = useNavigate();
  const {
    homepage: { aboutTitle, aboutDescription, aboutImage } = {},
    isLoading,
  } = useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="xl" component="section">
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column-reverse" }}
        gap={8}
        py={12}
        component={motion.div}
        initial={{ y: 300 }}
        whileInView={{ y: 0, transition: { type: "spring", duration: 1 } }}
        viewport={{ once: true }}
      >
        <Box>
          <StyledImg src={aboutImage} alt="Kilomet coaches" />
        </Box>
        <Stack
          spacing={4}
          mt={{ md: 6 }}
          alignItems={{ xs: "center", md: "normal" }}
        >
          <Typography variant="h1">{aboutTitle}</Typography>

          <Typography variant="body1">{aboutDescription}</Typography>

          <Box>
            <Button
              variant="contained"
              onClick={() => navigate("/about")}
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
      </Box>
    </Container>
  );
}

export default HomeAbout;
