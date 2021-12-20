import { useState } from "react";

const Checked = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <li className="Checked">
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <span className={checked ? "checked" : null}>{props.item}</span>
      </label>
    </li>
  );
};

export default Checked;
