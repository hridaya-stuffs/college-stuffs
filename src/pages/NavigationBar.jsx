import "./NavigationBar.css";

const NavigationBar = () => {
  const home = "Home";
  const about = "About";
  const contact = "Contact";
  const projects = "Projects";
  const resume = "Resume";
  const blog = "Blog";
  const links = [home, about, contact, projects, resume, blog];

  const listItems = links.map((link, index) => (
    <a key={index} href={"#" + link}>
      {link}
    </a>
  ));

  return (
    <div className="navbar">
      <h1>React</h1>
      <div className="navBarItems">{listItems}</div>
    </div>
  );
};

export default NavigationBar;
