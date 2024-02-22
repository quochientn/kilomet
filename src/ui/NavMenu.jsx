import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";

const StyledNavList = styled("ul")`
  display: flex;
  gap: 2rem;
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)(
  ({ theme }) => `
  &:link, &:visited {
    // color: ${theme.palette.white.main};
    font-weight: 500;
    text-transform: uppercase;
  },
`
);

function NavMenu() {
  return (
    <StyledNavList>
      <StyledNavLink to="/">Trang chủ</StyledNavLink>
      <StyledNavLink to="/about">Giới thiệu</StyledNavLink>
      <StyledNavLink to="/training">Tập luyện</StyledNavLink>
      <StyledNavLink to="/blog">Blog</StyledNavLink>
      <StyledNavLink to="/contact">Liên hệ</StyledNavLink>
    </StyledNavList>
  );
}

export default NavMenu;
