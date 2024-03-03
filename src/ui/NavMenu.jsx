import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Drawer, IconButton, styled } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

const StyledNavList = styled("ul")`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)(
  ({ theme }) => `
  &:link, &:visited {
    color: ${theme.palette.white.main};
    font-weight: 500;
    text-transform: uppercase;
    transition: ease 0.3s;
  },

  &.active, &:hover, &:focus {
    color: ${theme.palette.primary.main}
  }
`
);

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  const handleClose = () => {
    setIsOpen(false);
    console.log("closed");
  };

  return (
    <>
      <Box component="nav">
        <StyledNavList sx={{ display: { xs: "none", md: "flex" } }}>
          <li>
            <StyledNavLink to="/">Trang chủ</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">Giới thiệu</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/training">Tập luyện</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/blog">Blog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">Liên hệ</StyledNavLink>
          </li>
        </StyledNavList>
      </Box>

      <Box display={{ md: "none" }}>
        <IconButton onClick={handleClick}>
          <MenuOutlined sx={{ color: "primary.main", fontSize: "2rem" }} />
        </IconButton>
      </Box>

      <Drawer
        open={isOpen}
        onClose={handleClose}
        anchor="right"
        PaperProps={{ sx: { backgroundColor: "rgba(0,0,0,0.8)" } }}
      >
        <Box px={6} my="auto" component="nav">
          <StyledNavList sx={{ flexDirection: "column" }}>
            <li>
              <StyledNavLink to="/" onClick={handleClose}>
                Trang chủ
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about" onClick={handleClose}>
                Giới thiệu
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/training" onClick={handleClose}>
                Tập luyện
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/blog" onClick={handleClose}>
                Blog
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact" onClick={handleClose}>
                Liên hệ
              </StyledNavLink>
            </li>
          </StyledNavList>
        </Box>
      </Drawer>
    </>
  );
}

export default NavMenu;
