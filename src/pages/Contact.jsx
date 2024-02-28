import { Box, Typography } from "@mui/material";

import TopBanner from "../ui/TopBanner";

function Contact() {
  return (
    <>
      <TopBanner banner="https://xgwkqjesrackwmyzakak.supabase.co/storage/v1/object/public/home/368308216_137148159449003_2545429911156930765_n.jpg" />
      <Box py={20}>
        <Typography variant="h4" align="center">
          Trang đang trong quá trình cập nhật. Vui lòng quay lại sau!
        </Typography>
      </Box>
    </>
  );
}

export default Contact;
