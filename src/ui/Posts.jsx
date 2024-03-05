import { useNavigate } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";

import { usePosts } from "../hooks/usePosts";
import Spinner from "./Spinner";
import Post from "./Post";
import Heading from "./Heading";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const formattedDate = (date) => {
  const dateFormat = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
  }).format(new Date(date));

  return dateFormat;
};

function Posts() {
  const navigate = useNavigate();
  const { posts, isLoading } = usePosts();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="xl">
      <Stack py={12} spacing={8}>
        <Heading content="Blog" />

        <Grid2 container columnSpacing={4} rowSpacing={8}>
          {posts.map((post) => (
            <Grid2 md={4} xs={12} key={post.id}>
              <Post
                src={post.thumbnail}
                title={post.title}
                subTitle={post.subTitle}
                date={formattedDate(post.created_at)}
                onClick={() => navigate(`/blog/${post.id}`)}
              />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Container>
  );
}

export default Posts;
