import { Link, Outlet, useLocation } from "react-router-dom";

//components
import Action from "./Action";

//media
const headShot = require("../img/whs.png");

const Home = (props) => {
  const location = useLocation().pathname;
  return (
    <div className="Home">
      <h1>Whitney Kelley</h1>
      <h2>flutist</h2>
      <img
        src={headShot}
        alt="headshot of Whitney Kelley"
        className="headshot"
      />
      <Action />
      <Outlet />
      {location !== "/contact" ? <Action /> : null}
    </div>
  );
};

export default Home;
