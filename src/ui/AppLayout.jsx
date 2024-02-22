import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />

      <Container maxWidth="xl" component="main" sx={{ mt: "4rem" }}>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}

export default AppLayout;
