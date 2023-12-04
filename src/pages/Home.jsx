import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function Home() {
  return (
    <div className="navbar">
      <Link to="/about">about</Link>
      <NavigationBar />
    </div>
  );
}

export default Home;
