const Ham = (props) => {
  return (
    <ul className={props.isX ? "hamX" : "hamE"} onClick={props.toggle}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Ham;
