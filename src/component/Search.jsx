import React from "react";
import Joke from "./Joke";
import Title from "./Title";
import "./Search.css";
import { useState } from "react";

export default function Search() {
  const [jokes, setJokes] = useState([]);
  const [text, setText] = useState("");
  const searchJokes = (e) => {
    e.preventDefault();
    fetch(
      `https://sv-jokes.herokuapp.com/search?text=${encodeURIComponent(text)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJokes(data);
        console.log(data);
      });
  };

  return (
    <Title title="Search Joke">
      <form onSubmit={searchJokes}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {jokes.map((joke) => (
        <Joke key={joke} jokeString={joke} />
      ))}
    </Title>
  );
}
