import { Link, Outlet, useLocation } from "react-router-dom";

//components
import Action from "./Action";

//media
const headShot = require("../img/whs.png");

const Home = (props) => {
  const location = useLocation().pathname;
  return (
    <div className="Home">
      {location === "/" ? (
        <section>
          <h1>Whitney Kelley</h1>
          <h2>flutist</h2>
          <img
            src={headShot}
            alt="headshot of Whitney Kelley"
            className="headshot"
          />
          <Action />
        </section>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Home;
