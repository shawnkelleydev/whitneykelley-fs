//components
import Bio from "./Bio";
import Publications from "./Publications";
import Performances from "./Performances";
import Headline from "./Headline";
import Action from "./Action";
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const actions = [
    { text: "about lessons", path: "lessons" },
    { text: "contact whitney", path: "contact" },
  ];
  const navigate = useNavigate();

  return (
    <div className="About">
      <Headline width={props.width} />
      <div className="About-buttons-container">
        {actions.map((action, i) => (
          <Action
            key={i}
            text={action.text}
            action={() => navigate(`/${action.path}`)}
          />
        ))}
      </div>
      <div className="About-grid">
        <Bio />
        <Performances />
        <Publications />
      </div>
    </div>
  );
};

export default About;
