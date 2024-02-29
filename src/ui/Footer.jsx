import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

import { useSettings } from "../hooks/useSettings";
import Spinner from "./Spinner";
import FooterNav from "./FooterNav";

function Footer() {
  const theme = useTheme();
  const { settings: { email, phone, social } = {}, isLoading } = useSettings();

  if (isLoading) return <Spinner />;

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
      }}
      pt={8}
      pb={4}
    >
      <Container maxWidth="xl">
        <Stack gap={4} textAlign="center" color="white.main">
          <Stack
            direction={{ sm: "row", xs: "column" }}
            spacing={{ sm: "auto", xs: 6 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={3}
            >
              <Typography variant="h6" textTransform="uppercase">
                Kilomet
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneOutlined />
                <Typography
                  variant="body2"
                  color="white.main"
                  component="a"
                  href={`tel:${phone}`}
                >
                  {phone}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <EmailOutlined />
                <Typography
                  variant="body2"
                  color="white.main"
                  component="a"
                  href={`mailto:${email}`}
                >
                  {email}
                </Typography>
              </Stack>
            </Box>

            <Box
              ml={{ sm: "auto" }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={3}
            >
              <Typography variant="h6" textTransform="uppercase">
                Trang
              </Typography>

              <FooterNav />
            </Box>

            <Box
              ml={{ sm: "auto" }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={3}
            >
              <Typography variant="h6" textTransform="uppercase">
                Theo dõi
              </Typography>

              {social.map((social) => (
                <Link href={social.link} key={social.link}>
                  <img src={social.icon} alt="Social icon" width="30px" />
                </Link>
              ))}
            </Box>
          </Stack>

          <Divider sx={{ borderColor: "white.main" }} />

          <Box
            display="flex"
            flexDirection={{ sm: "row", xs: "column" }}
            gap={2}
            justifyContent="space-between"
          >
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} KILOMET. All rights reserved.
            </Typography>

            <Typography variant="body2">Powered by quochientn</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
