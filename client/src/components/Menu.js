import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className={props.isX ? "nav-show" : "nav-hide"} onClick={props.click}>
      <NavLink to="/">about</NavLink>
      <NavLink to="/lessons">private lessons</NavLink>

      {/* <NavLink to="/performances">performance schedule</NavLink>
      <NavLink to="/publications">publications</NavLink> */}
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
};

export default Menu;
