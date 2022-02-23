import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Action = (props) => {
  const [active, setActive] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (props.path) {
      const topic = params.topic;
      const path = props.path;
      setActive(topic === path ? true : false);
    }
  }, [params, props]);

  return (
    <button
      className={!active ? "Action" : "Action Action-active"}
      onClick={props.action}
      type={props.type ? props.type : null}
    >
      {props.text}
    </button>
  );
};

export default Action;
