import { NavLink } from "react-router-dom";
import { pages } from "./data";

const Menu = (props) => {
  return (
    <nav
      className={props.isX ? "Menu" : "Menu Menu-hide"}
      onClick={props.click}
    >
      {pages.map((page, i) => (
        <NavLink key={i} to={page}>
          {page}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
