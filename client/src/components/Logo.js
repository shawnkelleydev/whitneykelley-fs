import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="Logo">
      <Link to="/">
        <span className="name">Whitney Kelley</span>
      </Link>
    </div>
  );
};

export default Logo;
