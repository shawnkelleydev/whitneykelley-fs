import { Link } from "react-router-dom";

const Submitted = (props) => {
  return (
    <div className="Submitted">
      <Link to="/">
        <button>back to home</button>
      </Link>
      <p>Thanks! I'll get back with you soon...</p>
    </div>
  );
};

export default Submitted;
