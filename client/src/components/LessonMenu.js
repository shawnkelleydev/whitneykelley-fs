import { lessons } from "./data";
import Action from "./Action";
import { useNavigate } from "react-router-dom";

const LessonMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="LessonMenu">
      {lessons.map((topic, i) => (
        <Action
          key={i}
          text={topic.title}
          path={topic.path}
          action={() => navigate(`/lessons/${topic.path}`)}
        />
      ))}
    </div>
  );
};

export default LessonMenu;
