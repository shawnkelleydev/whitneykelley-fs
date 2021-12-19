import { Link, useLocation } from "react-router-dom";

const Action = (props) => {
  const location = useLocation().pathname;
  return (
    <ul className="Action">
      <li>
        {location === "/contact" ? (
          <Link to="/">
            <button>back to home</button>
          </Link>
        ) : (
          <Link to="/contact">
            <button>contact Whitney</button>
          </Link>
        )}
      </li>
      <li>
        {location === "/lessons" ? (
          <Link to="/">
            <button className="button-alt">back to home</button>
          </Link>
        ) : (
          <Link to="/lessons">
            <button className="button-alt">about lessons</button>
          </Link>
        )}
      </li>
      <li className="bar" />
    </ul>
  );
};

export default Action;
