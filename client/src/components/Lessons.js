import { Link, Outlet } from "react-router-dom";

//components
import AboutLessons from "./AboutLessons";
import Ready from "./Ready";
import InPerson from "./InPerson";
import Online from "./Online";
import LessonMenu from "./LessonMenu";

const Lessons = (props) => {
  const sections = [
    {
      title: "Is my child ready for lessons?",
      section: <Ready />,
      path: "ready",
    },
    {
      title: "In-person lessons",
      section: <InPerson />,
      path: "in-person",
    },
    {
      title: "Online lessons",
      section: <Online />,
      path: "online",
    },
  ];

  return (
    <div className="Lessons">
      <h1>Private Lessons</h1>
      {props.width < 600 ? (
        <ul className="AboutLessons">
          <AboutLessons data={sections[0]} />
          <AboutLessons data={sections[1]} />
          <AboutLessons data={sections[2]} />
          <button>Contact Whitney</button>
        </ul>
      ) : (
        <div>
          <LessonMenu sections={sections} />
          <Outlet />
          <Link to="/contact" className="contact-button">
            <button className="top20">Contact Whitney</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Lessons;
