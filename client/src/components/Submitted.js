import { useNavigate } from "react-router-dom";
import Action from "./Action";

const Submitted = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Submitted">
      <p>Thanks!</p>
      <p>I'll get back with you soon...</p>
      <Action text="Back to Home" action={() => navigate("/")} />
    </div>
  );
};

export default Submitted;
