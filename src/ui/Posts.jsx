import { Container, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { usePosts } from "../hooks/usePosts";
import Spinner from "./Spinner";
import Post from "./Post";
import Heading from "./Heading";

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
            <Grid2
              md={4}
              sm={6}
              xs={12}
              key={post.id}
              component={motion.div}
              initial={{ y: 300 }}
              whileInView={{
                y: 0,
                transition: { type: "spring", duration: 1 },
              }}
              viewport={{ once: true }}
            >
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
