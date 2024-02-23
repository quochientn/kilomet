import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";

const StyledNav = styled("nav")`
  margin-left: auto;
`;

const StyledNavList = styled("ul")`
  display: flex;
  gap: 2rem;
  margin-left: auto;
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
  return (
    <StyledNav>
      <StyledNavList>
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
    </StyledNav>
  );
}

export default NavMenu;
