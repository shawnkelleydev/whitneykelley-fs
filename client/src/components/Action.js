import { Link } from "react-router-dom";

// loooots of conditional rendering here.

// shows action buttons based on location and props

const Action = (props) => {
  return (
    <ul className="Action">
      <li>
        <Link to="/contact">
          <button>contact Whitney</button>
        </Link>
      </li>
      <li>
        <Link to="/lessons/in-person">
          <button className="button-alt">about lessons</button>
        </Link>
      </li>
      <li className="bar" />
    </ul>
  );
};

export default Action;
