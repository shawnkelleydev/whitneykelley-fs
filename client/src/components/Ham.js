const Ham = (props) => {
  return (
    <ul className={props.isX ? "Ham Ham-X" : "Ham"} onClick={props.toggle}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Ham;
