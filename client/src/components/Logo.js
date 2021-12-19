import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
    </div>
  );
};

export default Logo;
