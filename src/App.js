import "./App.css";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [dogList, setDogList] = useState([]);
  const [dogImage, setDogImage] = useState("");
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((result) => {
        const breeds = Object.keys(result.message);
        setDogList(breeds);
      });
  }, []);
  const singleRandomDog = (dogName) => {
    fetch("https://dog.ceo/api/breed/" + dogName + "/images/random")
      .then((res) => res.json())
      .then((result) => {
        setDogImage(result.message);
        setAllImage([]);
      });
  };
  const allDog = (dogName) => {
    fetch("https://dog.ceo/api/breed/" + dogName + "/images")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setDogImage("");
        setAllImage(result.message);
      });
  };

  const dataList = dogList.map((item) => {
    return (
      <li key={item}>
        <span
          onClick={() => {
            singleRandomDog(item);
          }}
        >
          {item}
        </span>{" "}
        <button
          onClick={() => {
            allDog(item);
          }}
        >
          all images
        </button>
      </li>
    );
  });
  const showAllDogs = allImage.map((item, key) => {
    return <img key={key} src={item} />;
  });
  console.log(dogList);

  return (
    <Fragment>
      <div className="dog-list-wrapper">
        <ol>{dataList}</ol>
        <div className="image-list">
          <img
            src={dogImage ? dogImage : "https://dog.ceo//img/dog-api-logo.svg"}
          />
          {showAllDogs}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
