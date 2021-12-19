import { useState } from "react";

const AboutLessons = (props) => {
  const [active, setActive] = useState(false);
  const section = props.data.section;
  const title = props.data.title;

  return (
    <li
      onClick={() => {
        setActive(!active);
      }}
    >
      <h3>{title}</h3>
      {active ? section : null}
    </li>
  );
};

export default AboutLessons;
