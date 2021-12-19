import { Link } from "react-router-dom";

//components
import AboutLessons from "./AboutLessons";
import Ready from "./Ready";
import InPerson from "./InPerson";
import Online from "./Online";

const Lessons = (props) => {
  const sections = [
    {
      title: "Is my child ready for lessons?",
      section: <Ready />,
    },
    {
      title: "In-person lessons",
      section: <InPerson />,
    },
    {
      title: "Online lessons",
      section: <Online />,
    },
  ];

  return (
    <div className="Lessons">
      <h1>Private Lessons</h1>
      <ul className="AboutLessons">
        <AboutLessons data={sections[0]} />
        <AboutLessons data={sections[1]} />
        <AboutLessons data={sections[2]} />
      </ul>
      <Link to="/">&larr; home</Link>
    </div>
  );
};

export default Lessons;
