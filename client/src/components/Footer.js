import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <ul className="Footer">
      <li>
        <p>
          Site developed by{" "}
          <a href="https://shawnkelley.dev" target="_blank" rel="noreferrer">
            Shawn Kelley
          </a>
          .
        </p>
      </li>
    </ul>
  );
};

export default Footer;
