import { Box, Typography } from "@mui/material";

import TopBanner from "../ui/TopBanner";

function Blog() {
  return (
    <>
      <TopBanner banner="https://xgwkqjesrackwmyzakak.supabase.co/storage/v1/object/public/home/402046967_188176611012824_5469181321449538705_n.png" />
      <Box py={20}>
        <Typography variant="h4" align="center">
          Trang đang trong quá trình cập nhật. Vui lòng quay lại sau!
        </Typography>
      </Box>
    </>
  );
}

export default Blog;
