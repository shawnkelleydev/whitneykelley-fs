import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";

//components
import LessonMenu from "./LessonMenu";
import Action from "./Action";

const Lessons = () => {
  const navigate = useNavigate();
  const params = useParams();

  return params.topic ? (
    <div className="Lessons">
      <h1>Private Lessons</h1>
      <LessonMenu />
      <Outlet />
      <Action text="Contact Whitney" action={() => navigate("/contact")} />
    </div>
  ) : (
    <Navigate to="/lessons/ready" />
  );
};

export default Lessons;
