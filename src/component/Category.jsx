import React from "react";
import Title from "./Title";
import Joke from "./Joke";
import "./Category.css";
import { useState } from "react";

export default function Category() {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = (category) => {
    fetch(
      `https://sv-jokes.herokuapp.com/by-category?name=${encodeURIComponent(
        category
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJokes(data);
        console.log(data);
      });
  };

  const categories = [
    "javascript",
    "react",
    "java",
    "c#",
    "node",
    "coffeescript",
    "css",
    "ember",
    "backbone",
    "knockout",
  ];
  return (
    <Title title={"By category jokes"}>
      <div className="button">
        {categories.map((category) => (
          <button key={category} onClick={() => fetchJokes(category)}>
            {category}
          </button>
        ))}
      </div>
      {jokes.map((joke) => (
        <Joke key={joke} jokeString={joke} />
      ))}
    </Title>
  );
}
