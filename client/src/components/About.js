import { Link } from "react-router-dom";

//components
import Bio from "./Bio";
import Publications from "./Publications";
import Performances from "./Performances";

const About = (props) => {
  return (
    <div className="About">
      <Bio />
      <Publications />
      <Performances />
    </div>
  );
};

export default About;
