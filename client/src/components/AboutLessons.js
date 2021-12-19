import { useState } from "react";

const AboutLessons = (props) => {
  const [active, setActive] = useState(false);
  const section = props.data.section;
  const title = props.data.title;

  return (
    <li>
      <h3
        onClick={() => {
          setActive(!active);
        }}
      >
        {title}
      </h3>

      {active ? section : null}
    </li>
  );
};

export default AboutLessons;
