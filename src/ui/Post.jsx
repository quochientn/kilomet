import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

function Post({ src, title, date, subTitle, onClick }) {
  return (
    <CardActionArea
      onClick={onClick}
      sx={{
        "&:hover h6:first-of-type": {
          color: "primary.main",
        },
      }}
    >
      <Card>
        <CardMedia image={src} alt="Thumbnail" sx={{ height: 300 }} />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6" textTransform="uppercase" fontWeight={700}>
              {title}
            </Typography>

            <Typography variant="body2" pb={3} color="gray.main">
              {date}
            </Typography>

            <Typography variant="subtitle2">{subTitle}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

export default Post;
