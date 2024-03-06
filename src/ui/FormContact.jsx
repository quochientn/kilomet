import { Box, Container, Stack, TextField } from "@mui/material";

import Heading from "./Heading";

function FormContact() {
  return (
    <Container maxWidth="md">
      <Stack py={12} spacing={8}>
        <Heading content="Liên hệ" />

        <Box display="flex" flexDirection="column" gap={6} component="form">
          <TextField
            id="name"
            label="Tên"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            id="phone"
            label="Số điện thoại"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="message"
            label="Nội dung"
            type="text"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            required
          />
          <TextField
            value="Gửi"
            type="submit"
            sx={{
              alignSelf: "flex-end",

              "& input": {
                minWidth: "4rem",
                p: "0.8rem 1rem",
                borderRadius: "4px",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "white.main",
                backgroundColor: "primary.main",
                transition: "ease 0.3s",
                cursor: "pointer",

                "&:hover, &:focus": {
                  backgroundColor: "primary.dark",
                },
              },
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default FormContact;
