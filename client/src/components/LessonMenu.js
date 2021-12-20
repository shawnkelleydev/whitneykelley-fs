import { Link, useLocation } from "react-router-dom";

const LessonMenu = (props) => {
  const location = useLocation().pathname;
  return (
    <div className="LessonMenu">
      {props.sections.map((section, i) => {
        return (
          <Link to={`/lessons/${section.path}`} key={i}>
            <button
              className={
                `/lessons/${section.path}` === location ? "active-button" : null
              }
            >
              {section.title}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default LessonMenu;
