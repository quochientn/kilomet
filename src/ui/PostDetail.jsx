import { Container, Stack, Typography } from "@mui/material";

import { usePost } from "../hooks/usePost";
import Spinner from "./Spinner";

const formattedDate = (date) => {
  const dateFormat = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(date));

  return dateFormat;
};

function PostDetail() {
  const { post: { title, subTitle, content, created_at } = {}, isLoading } =
    usePost();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="md">
      <Stack py={12} mt={{ sm: 10, xs: 8 }}>
        <Typography variant="body2" align="right" color="gray.main">
          {formattedDate(created_at)}
        </Typography>

        <Typography variant="h1" py={4}>
          {title}
        </Typography>

        <Typography variant="subtitle2" mb={6}>
          {subTitle}
        </Typography>

        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {content}
        </Typography>
      </Stack>
    </Container>
  );
}

export default PostDetail;
