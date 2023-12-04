import { Fragment } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <Fragment>
      <Link to="/">homepage</Link>
      <h1>ABout us</h1>
    </Fragment>
  );
}

export default About;
