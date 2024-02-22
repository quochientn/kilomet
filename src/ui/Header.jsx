import { AppBar, Toolbar } from "@mui/material";

import NavMenu from "./NavMenu";
import Logo from "./Logo";

function Header() {
  return (
    <AppBar sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Logo />
        <NavMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
