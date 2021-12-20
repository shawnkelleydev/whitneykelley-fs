import { Outlet, useLocation } from "react-router-dom";

//components
import Action from "./Action";

//media
const headShot = require("../img/whs.png");
const banner = require("../img/banner.jpg");

const Home = (props) => {
  const location = useLocation().pathname;
  const width = props.width;
  return (
    <div className="Home">
      {location === "/" ? (
        //small screen
        width < 600 ? (
          <section className="profile">
            <h1>Whitney Kelley</h1>
            <h2>flutist</h2>
            <img
              src={headShot}
              alt="headshot of Whitney Kelley"
              className="headshot"
            />
            <Action />
          </section>
        ) : (
          //large screen
          <section>
            <img
              src={banner}
              alt="headshot of Whitney Kelley"
              className="banner"
            />
            <Action />
          </section>
        )
      ) : null}
      <Outlet />
    </div>
  );
};

export default Home;
