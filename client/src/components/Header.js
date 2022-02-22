import { useState } from "react";

//components
import Menu from "./Menu";
import Ham from "./Ham";
import Logo from "./Logo";

const Header = () => {
  const [isX, setIsX] = useState(false);

  return (
    <header>
      <div>
        <Logo />
        <Menu isX={isX} click={() => setIsX(false)} />
        <Ham isX={isX} toggle={() => setIsX(!isX)} />
      </div>
    </header>
  );
};

export default Header;
