import { AppBar, Slide, Toolbar, useScrollTrigger } from "@mui/material";

import NavMenu from "./NavMenu";
import Logo from "./Logo";
import Progress from "./Progress";

function Header() {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} in={!trigger} direction="down">
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
    </Slide>
  );
}

export default Header;
