import { AppBar, Toolbar } from "@mui/material";

import NavMenu from "./NavMenu";
import Logo from "./Logo";
import Progress from "./Progress";

function Header() {
  return (
    <AppBar
      sx={{
        py: "0.5rem",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />
        <NavMenu />
        <Progress />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
