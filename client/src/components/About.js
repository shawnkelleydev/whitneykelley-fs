//components
import Bio from "./Bio";
import Publications from "./Publications";
import Performances from "./Performances";

const About = () => {
  return (
    <div className="About">
      <Bio />
      <Performances />
      <Publications />
    </div>
  );
};

export default About;
