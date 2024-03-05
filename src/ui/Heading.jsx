import { Typography } from "@mui/material";

function Heading({ content }) {
  return (
    <Typography variant="h1" align="center" textTransform="uppercase">
      {content}
    </Typography>
  );
}

export default Heading;
