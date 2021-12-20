import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = (props) => {
  const [isLessons, setIsLessons] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location.split("/")[1] === "lessons") {
      setIsLessons(true);
    } else {
      setIsLessons(false);
    }
  }, [location]);

  return (
    <nav className={props.isX ? "nav-show" : "nav-hide"} onClick={props.click}>
      <NavLink to="/">about</NavLink>
      <NavLink to="/lessons/in-person" className={isLessons ? "active" : null}>
        private lessons
      </NavLink>
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
};

export default Menu;
