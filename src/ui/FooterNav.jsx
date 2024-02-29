import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "Giới thiệu", link: "about" },
  { name: "Tập luyện", link: "training" },
  { name: "Blog", link: "blog" },
  { name: "Liên hệ", link: "contact" },
];

const StyledNavLink = styled(NavLink)(
  ({ theme }) => `
    &:link, &:visited {
      color: ${theme.palette.white.main};
      font-weight: 500;
      
    },
  `
);

function FooterNav() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap={2}
      component="ul"
    >
      {pages.map((page) => (
        <li key={page.name}>
          <StyledNavLink to={`/${page.link}`}>{page.name}</StyledNavLink>
        </li>
      ))}
    </Box>
  );
}

export default FooterNav;
