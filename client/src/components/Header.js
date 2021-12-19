//components
import Menu from "./Menu";
import Ham from "./Ham";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <header>
      <Logo />
      <Menu />
      <Ham />
    </header>
  );
};

export default Header;
