import { Box, Typography, styled } from "@mui/material";

const StyledAvatar = styled("img")`
  height: 20rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

function Coach({ src, alt, name, onClick }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      sx={{
        cursor: "pointer",
        "&:hover": {
          color: "primary.main",
          textDecoration: "underline",
        },
      }}
      onClick={onClick}
    >
      <StyledAvatar src={src} alt={alt} />

      <Typography variant="h3" align="center" textTransform="uppercase">
        {name}
      </Typography>
    </Box>
  );
}

export default Coach;
