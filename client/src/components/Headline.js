//components
// import Action from "./Action";
import { useEffect, useState } from "react";

//media
import headShot from "../img/whs.png";
import banner from "../img/banner.jpg";

export default function Headline(props) {
  return props.width < 768 ? (
    <div className="Headline">
      <h1>Whitney Kelley</h1>
      <h2>flutist</h2>
      <img src={headShot} alt="headshot of Whitney Kelley" />
    </div>
  ) : (
    //large screen
    <div className="Headline">
      <img src={banner} alt="headshot of Whitney Kelley" />
    </div>
  );
}
