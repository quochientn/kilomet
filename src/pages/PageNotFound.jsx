import { ErrorOutline } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";

function PageNotFound() {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        mt={8}
        py={12}
      >
        <ErrorOutline sx={{ fontSize: "3rem" }} />

        <Typography variant="body1">
          Trang bạn tìm kiếm đã bị xóa hoặc không tồn tại.
        </Typography>

        <Button href="/">Về trang chủ</Button>
      </Box>
    </Container>
  );
}

export default PageNotFound;
