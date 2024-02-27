import { AppBar, Toolbar } from "@mui/material";

import NavMenu from "./NavMenu";
import Logo from "./Logo";
import Progress from "./Progress";

function Header() {
  return (
    <AppBar sx={{ backgroundColor: "transparent" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />
        <NavMenu />
        <Progress />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
