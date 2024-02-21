import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <ul>
      <NavLink to="/">Trang chủ</NavLink>
      <NavLink to="/about">Giới thiệu</NavLink>
      <NavLink to="/training">Tập luyện</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Liên hệ</NavLink>
    </ul>
  );
}

export default NavMenu;
