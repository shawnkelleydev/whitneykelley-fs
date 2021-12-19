import { useState } from "react";

//components
import Menu from "./Menu";
import Ham from "./Ham";
import Logo from "./Logo";

const Header = (props) => {
  const [isX, setIsX] = useState(false);

  return (
    <header>
      <Logo />
      <Menu isX={isX} click={() => setIsX(false)} />
      <Ham isX={isX} toggle={() => setIsX(!isX)} />
    </header>
  );
};

export default Header;
