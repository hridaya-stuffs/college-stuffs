// import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Header from "./components/header";

function App() {
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://dog.ceo/api/breeds/list/all", requestOptions)
      .then((response) => response.json())
      .then((result) => setDogList(Object.keys(result.message)))
      .catch((error) => console.log("error", error));
  }, []);

  const dataList = dogList.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <Fragment>
      <Header />
      <ul>{dataList}</ul>
    </Fragment>
  );
}

export default App;
