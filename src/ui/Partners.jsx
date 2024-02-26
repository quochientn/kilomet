import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { useHomepage } from "../hooks/useHomepage";
import Spinner from "./Spinner";

const StyledImg = styled("img")`
  height: 10rem;
  filter: grayscale(1);
  transition: ease 0.5s;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.2);
  }
`;

function Partners() {
  const { homepage: { partners } = {}, isLoading } = useHomepage();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="xl" component="section">
      <Stack spacing={8} sx={{ py: "6rem" }}>
        <Typography variant="h3" align="center">
          Đồng hành cùng Kilomet
        </Typography>

        <Box display="flex" justifyContent="space-evenly">
          {partners?.map((partner) => (
            <StyledImg src={partner} alt="Partner logo" key={partner} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}

export default Partners;
