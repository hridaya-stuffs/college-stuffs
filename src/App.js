// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";

import { Fragment, useEffect, useState } from "react";

function App() {
  // var a = 5;
  // console.log(a);

  // Implement arrow function
  const [hello, setHello] = useState();
  console.log(hello);
  // setHello(10);

  // function forArrow() {}
  // Arrow function
  // const forArrow = () => {
  //   console.log("Hello");
  //   alert("Hello");
  // };

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <Fragment>
      <div>
        <button onClick={() => setHello(10)}>Click me</button>
        <Header />
      </div>
    </Fragment>
  );
}

export default App;
