import { Link } from "react-router-dom";

// loooots of conditional rendering here.

// shows action buttons based on location and props

const Action = () => {
  return (
    <div className="Action">
      <Link to="/contact">
        <button>contact Whitney</button>
      </Link>

      <Link to="/lessons/in-person">
        <button className="button-alt">about lessons</button>
      </Link>

      <span className="bar" />
    </div>
  );
};

export default Action;
