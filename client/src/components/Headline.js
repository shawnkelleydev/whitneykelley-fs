//components
import Action from "./Action";
import { useLocation } from "react-router-dom";

//media
const headShot = require("../img/whs.png");
const banner = require("../img/banner.jpg");

export default function Headline(props) {
  const location = useLocation().pathname;
  const width = props.width;
  return location === "/" ? (
    //small screen
    width < 768 ? (
      <section className="Headline">
        <h1>Whitney Kelley</h1>
        <h2>flutist</h2>
        <img src={headShot} alt="headshot of Whitney Kelley" />
        <Action />
      </section>
    ) : (
      //large screen
      <section className="Headline">
        <img src={banner} alt="headshot of Whitney Kelley" />
        <Action />
      </section>
    )
  ) : null;
}
