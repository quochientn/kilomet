import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

const StyledAvatar = styled("img")`
  height: 20rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

function Coach({ src, alt, name }) {
  return (
    // <Card>
    //   <CardActionArea>
    //     <CardMedia image={image} title={title} sx={{ height: 300 }} />
    //     <CardContent>
    //       <Typography variant="h5" align="center" textTransform="uppercase">
    //         {name}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>

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
    >
      <StyledAvatar src={src} alt={alt} />

      <Typography variant="h5" align="center" textTransform="uppercase">
        {name}
      </Typography>
    </Box>
  );
}

export default Coach;
