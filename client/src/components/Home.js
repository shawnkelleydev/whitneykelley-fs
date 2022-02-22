import { Outlet } from "react-router-dom";
import Headline from "./Headline";

const Home = (props) => {
  const width = props.width;
  return (
    <div className="Home">
      <Headline width={width} />
      <Outlet />
    </div>
  );
};

export default Home;
