import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";

const StyledImg = styled("img")`
  height: 10rem;

  @media screen and (min-width: 900px) {
    filter: grayscale(1);
    transition: ease 0.5s;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.2);
    }
  }
`;

function Partners() {
  const { homepage: { partnersImage, partnersTitle } = {}, isLoading } =
    useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="xl" component="section">
      <Stack spacing={8} py={12}>
        <Typography variant="h1" align="center">
          {partnersTitle}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-evenly"
          gap={6}
          flexWrap="wrap"
        >
          {partnersImage?.map((partner) => (
            <StyledImg src={partner} alt="Partner logo" key={partner} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}

export default Partners;
